import path from "path"
import fs from "fs-extra"
import fg from "fast-glob"
import { loadQuizes, resolveInfo } from "../../scripts/loader"
import { getAllTags, getQuizesByTag } from "../../scripts/readme"
import { DIFFICULTY_RANK } from "../../scripts/configs"
import { Quiz } from "../../scripts/types"

function getChallengesByDifficulty(quizes: Quiz[]) {
  const result = {}
  quizes.forEach((item) => {
    const info = resolveInfo(item, "en")
   ;(result[info.difficulty!] || (result[info.difficulty!] = [])).push(item)
  })
  return result as Record<string, Quiz[]>
}

function getChallengesByTags(quizes: Quiz[]) {
  const quizesByDifficulty = [...quizes].sort((a, b) => {
    const preInfo = resolveInfo(a, "en")
    const activeInfo = resolveInfo(b, "en")
    return DIFFICULTY_RANK.indexOf(preInfo.difficulty!) - DIFFICULTY_RANK.indexOf(activeInfo.difficulty!)
  })
  const tags = getAllTags(quizes, "en")
  const result = {}
  for (const tag of tags) {
    const q = getQuizesByTag(quizesByDifficulty, "en", tag)
    result[tag] = q
  }
  return result as Record<string, Quiz[]>
}

async function generateChallengesNavMenu(challenges: Record<string, Quiz[]>) {
  const categorys = Object.keys(challenges)?.map((item) => {
    return {
      text: item,
      link: `/challenges#category=${encodeURIComponent(item)}`,
    }
  })
  const navMenu = Object.keys(challenges)?.map((item) => {
    return {
      text: item,
      items: challenges[item]?.map((childItem) => {
        const info = resolveInfo(childItem, "en")
        return {
          text: info.title,
          link: `/questions/${childItem.path}/README`,
        }
      }),
    }
  })
  await fs.writeJSON(path.resolve(__dirname, "../meta/challenges-nav-menu.json"), { categorys, navMenu }, { spaces: 2 })
}

async function copyQuestions() {
  const from = path.join(__dirname, "../../questions")
  const to = path.join(__dirname, "../questions")
  const files = await fg(["**/README.md"], {
    cwd: from,
  })
  files.forEach((file) => {
    fs.copySync(path.join(from, file), path.join(to, file), {
      overwrite: true,
      recursive: true,
    })
  })
}

async function update() {
  const quizes = await loadQuizes()
  const challengesByDifficulty = getChallengesByDifficulty(quizes)
  await fs.writeJSON(path.resolve(__dirname, "../meta/challenges.json"), { challenges: quizes, challengesByDifficulty }, { spaces: 2 })
  const challengesByTags = getChallengesByTags(quizes)
  generateChallengesNavMenu(challengesByTags)
  copyQuestions()
}

update()
