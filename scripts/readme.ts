import path from "path"
import fs from "fs-extra"
import { QUIZ_ROOT, resolveInfo } from "./loader"
import { defaultLocale, f, SupportedLocale, supportedLocales, t } from "./locales"
import type { Quiz, QuizMetaInfo } from "./types"

const difficultyColors: Record<string, string> = {
  warm: "teal",
  easy: "7aad0c",
  medium: "d9901a",
  hard: "de3d37",
  extreme: "b11b8d",
}

function escapeHtml(unsafe: string) {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
}

export function getNearborREADME(quiz: Quiz, locale?: string) {
  return locale && locale !== defaultLocale && quiz.readme[locale]
    ? `./README.${locale}.md`
    : "./README.md"
}

function generateBadgeURL(label: string, text: string, color: string, args = "") {
  return `https://img.shields.io/badge/${encodeURIComponent(label.replace(/-/g, "--"))}-${encodeURIComponent(text.replace(/-/g, "--"))}-${color}${args}`
}

function generateBadge(label: string, text: string, color: string, args = "") {
  return `<img src="${generateBadgeURL(label, text, color, args)}" alt="${text}"/>`
}

export function generateBadgeLink(url: string, label: string, text: string, color: string, args = "") {
  return `<a href="${url}" target="_blank">${generateBadge(label, text, color, args)}</a> `
}

function generateAuthorInfo(author: Partial<QuizMetaInfo["author"]> = {}) {
  return `By ${author.name}${author.github ? ` <a href="https://github.com/${author.github}" target="_blank">@${author.github}</a>` : ""}`
}

function generateDifficultyBadge(difficulty: string, locale: SupportedLocale) {
  return generateBadge("", t(locale, `difficulty.${difficulty}`), difficultyColors[difficulty])
}

async function insertInfoToREADME(filepath: string, quiz: Quiz, locale: SupportedLocale) {
  if (!fs.existsSync(filepath))
    return
  let text = await fs.readFile(filepath, "utf-8")
  /* eslint-disable prefer-template */

  const info = resolveInfo(quiz, locale)
  const availableLocales = supportedLocales.filter(l => l !== locale).filter(l => !!quiz.readme[l])

  text = text
    .replace(
      /<!--info-header-start-->[\s\S]*<!--info-header-end-->/,
      "<!--info-header-start-->"
      + `<h1>${escapeHtml(info.title || "")} ${generateDifficultyBadge(info.difficulty, locale)} ${(info.tags || []).map(i => generateBadge("", `#${i}`, "999")).join(" ")}</h1>`
      + `<blockquote><p>${generateAuthorInfo(info.author)}</p></blockquote>`
      + "<p>"
      + generateBadgeLink(quiz.testLink, "", t(locale, "badge.take-the-challenge"), "213547", "?logo=vue.js&logoColor=42b883")
      + (availableLocales.length ? ("&nbsp;&nbsp;&nbsp;" + availableLocales.map(l => generateBadgeLink(getNearborREADME(quiz, l), "", t(l, "display"), "gray")).join(" ")) : "")
      + "</p>"
      + "<!--info-header-end-->",
    )

  await fs.writeFile(filepath, text, "utf-8")
}

export async function updateQuizREADME(quizes: Quiz[]) {
  // update each questions' readme
  for (const quiz of quizes) {
    for (const locale of supportedLocales) {
      await insertInfoToREADME(
        path.join(
          QUIZ_ROOT,
          quiz.path,
          f("README", locale, "md"),
        ),
        quiz,
        locale,
      )
    }
  }
}
