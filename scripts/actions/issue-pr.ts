import YAML from "js-yaml"
import slug from "limax"
import { PushCommit } from "@type-challenges/octokit-create-pull-request"
import { Action, Context, Github, Quiz } from "../types"
import { normalizeSFCLink } from "../loader"
import { resolveFilePath } from "../utils"

const Messages = {
  "en": {
    info: "Info",
    template: "Template",
    issue_reply: "#{0} - Pull Request created.",
    issue_update_reply: "#{0} - Pull Request updated.",
    issue_invalid_reply:
      "Failed to parse the issue, please follow the template.",
    pr_auto_translate_tips: "Auto translated by Google Translate",
  },
  "zh-CN": {
    info: "基本信息",
    template: "题目模版",
    issue_reply: "#{0} - PR 已生成",
    issue_update_reply: "#{0} - PR 已更新",
    issue_invalid_reply: "Issue 格式不正确，请按照依照模版修正",
    pr_auto_translate_tips: "通过谷歌 API 自动翻译",
  },
}

export const getOthers = <A, B>(condition: boolean, a: A, b: B): A | B => condition ? a : b

const action: Action = async(github, context, core) => {
  const payload = context.payload || {}
  const issue = payload.issue
  const no = context.issue.number

  if (!issue) return

  const labels: string[] = (issue.labels || [])
    .map((i: any) => i && i.name)
    .filter(Boolean)

  // create pr for new challenge
  if (labels.includes("new-challenge")) {
    const locale = labels.includes("zh-CN") ? "zh-CN" : "en"

    const body = issue.body || ""
    const infoRaw = getCodeBlock(body, Messages[locale].info, "yaml")
    const question = getChallengesContent(body)

    let info: any

    try {
      info = YAML.load(infoRaw || "")
    }
    catch {
      info = null
    }

    core.info("-----Playload-----")
    core.info(JSON.stringify(context.payload, null, 2))

    // invalid issue
    if (!question || !info) {
      await updateComment(
        github,
        context,
        Messages[locale].issue_invalid_reply,
      )
      return
    }

    const { data: user } = await github.users.getByUsername({
      username: issue.user.login,
    })

    // allow user to override the author info when filled in the Issue
    if (!info.author) {
      info.author = info.author || {}
      info.author.github = issue.user.login
      if (user)
        info.author.name = user.name
    }

    core.info(`user: ${JSON.stringify(user)}`)
    core.info(`info: ${JSON.stringify(info)}`)

    const quiz: Quiz = {
      no,
      path: "",
      info: {
        [locale]: info,
      },
      quizLink: normalizeSFCLink(question),
    }

    core.info("-----Parsed-----")
    core.info(JSON.stringify(quiz, null, 2))

    const { data: pulls } = await github.pulls.list({
      owner: context.repo.owner,
      repo: context.repo.repo,
      state: "open",
    })

    const existing_pull = pulls.find(
      i =>
        i.user.login === "github-actions[bot]" && i.title.startsWith(`#${no} `),
    )

    const dir = `questions/${no}-${info.difficulty}-${slug(
      info.title.replace(/\./g, "-").replace(/<.*>/g, ""),
      { tone: false },
    )}`
    const userEmail = `${user.id}+${user.login}@users.noreply.github.com`

    const files: Record<string, string> = {
      [resolveFilePath(dir, "info", "yml", locale)]: `${YAML.dump(info)}\n`,
      // ...question,
    }

    await PushCommit(github, {
      owner: context.repo.owner,
      repo: context.repo.repo,
      base: "master",
      head: `pulls/${no}`,
      changes: {
        files,
        commit: `feat(question): add #${no} - ${info.title}`,
        author: {
          name: user.name || user.login,
          email: userEmail,
        },
      },
      fresh: !existing_pull,
    })

    const createMessageBody = (prNumber: number) =>
      `${Messages[locale].issue_update_reply.replace(
        "{0}",
        prNumber.toString(),
      )}\n\n${getTimestampBadge()}`

    if (existing_pull) {
      core.info("-----Pull Request Existed-----")
      core.info(JSON.stringify(existing_pull, null, 2))
      await updateComment(
        github,
        context,
        createMessageBody(existing_pull.number),
      )
    }
    else {
      core.info("-----Creating PR-----")
      const { data: pr } = await github.pulls.create({
        owner: context.repo.owner,
        repo: context.repo.repo,
        base: "master",
        head: `pulls/${no}`,
        title: `#${no} - ${info.title}`,
        body: `This is an auto-generated PR that auto reflect on #${no}, please go to #${no} for discussion or making changes.\n\nCloses #${no}`,
        labels: ["auto-generated"],
      })

      await github.issues.addLabels({
        owner: context.repo.owner,
        repo: context.repo.repo,
        issue_number: pr.number,
        labels: ["auto-generated"],
      })

      core.info("-----Pull Request-----")
      core.info(JSON.stringify(pr, null, 2))

      if (pr)
        await updateComment(github, context, createMessageBody(pr.number))
    }
  }
  else {
    core.info("No matched labels, skipped")
  }
}

async function updateComment(github: Github, context: Context, body: string) {
  const { data: comments } = await github.issues.listComments({
    issue_number: context.issue.number,
    owner: context.repo.owner,
    repo: context.repo.repo,
  })

  const existing_comment = comments.find(
    i => i.user.login === "github-actions[bot]",
  )

  if (existing_comment) {
    return await github.issues.updateComment({
      comment_id: existing_comment.id,
      issue_number: context.issue.number,
      owner: context.repo.owner,
      repo: context.repo.repo,
      body,
    })
  }
  else {
    return await github.issues.createComment({
      issue_number: context.issue.number,
      owner: context.repo.owner,
      repo: context.repo.repo,
      body,
    })
  }
}

function getFileName(text: string) {
  /* eslint-disable prefer-regex-literals */
  const regex = new RegExp("filename\:([\\s\\S]*?)\`\`\`")
  const match = text.match(regex)
  if (match && match[1]) return match[1].toString().trim()
  return null
}

function getChallengesContent(text: string) {
  const comments = getCommentRange(text, "challenges")!
  const result: Record<string, string> = {}
  comments.forEach((comment: string) => {
    const fileName = getFileName(comment)!
    const codeBlock = getCodeBlock(comment)!
    result[fileName] = codeBlock
  })
  return result
}

function getCodeBlock(text: string, title?: string, lang?: string) {
  const regex = new RegExp(
    title
      ? `## ${title}[\\s\\S]*?\`\`\`${lang}([\\s\\S]*?)\`\`\``
      : "[\\s\\S]*?```(vue|ts|js|css)([\\s\\S]*?)```",
  )
  const match = text.match(regex)
  if (title && match && match[1]) return match[1].toString().trim()
  if (match && match[2]) return match[2].toString().trim()
  return null
}

function getCommentRange(text: string, key: string) {
  const regex = new RegExp(`<!--${key}-start-->([\\s\\S]*?)<!--${key}-end-->`, "g")
  const match = text.match(regex)
  if (match?.length)
    return match.map(item => item.toString().trim())

  return null
}

function getTimestampBadge() {
  return `![${new Date().toISOString()}](https://img.shields.io/date/${Math.round(
    +new Date() / 1000,
  )}?color=green&label=)`
}

export default action
