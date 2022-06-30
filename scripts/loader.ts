import path from "path"
import fs from "fs-extra"
import fg from "fast-glob"
import YAML from "js-yaml"
import { serialize } from "./utils"
import { QUIZ_ROOT, VUE_SFC_PLAYGROUND_URL } from "./configs"
import type { QuizMetaInfo, Quiz } from "./types"
import { supportedLocales, defaultLocale, f } from "./locales"

export async function loadFile(filepath: string) {
  if (fs.existsSync(filepath))
    return await fs.readFile(filepath, "utf-8")
  return undefined
}

export async function loadLocaleVariations<T = string>(
  filepath: string,
  preprocessor: (s: string) => T = s => s as unknown as T,
) {
  const { ext, dir, name } = path.parse(filepath)
  const data: Record<string, T> = {}

  for (const locale of supportedLocales) {
    const file = preprocessor(await loadFile(path.join(dir, f(name, locale, ext.slice(1)))) || "")
    if (file)
      data[locale] = file
  }

  if (!data[defaultLocale]) {
    // default version
    const file = preprocessor(await loadFile(filepath) || "")
    if (file)
      data[defaultLocale] = file
  }

  return data
}

export function normalizeSFCLink(content: Record<string, string>) {
  return VUE_SFC_PLAYGROUND_URL + serialize(content)
}

export function cleanUpREADME(text: string) {
  return text
    .replace(/<!--info-header-start-->[\s\S]*<!--info-header-end-->/, "")
    .replace(/<!--info-footer-start-->[\s\S]*<!--info-footer-end-->/, "")
    .trim()
}

export function resolveInfo(quiz: Quiz, locale: string = defaultLocale) {
  const info = Object.assign({}, quiz.info![defaultLocale], quiz.info![locale])
  if (typeof info.tags === "string")
    info.tags = info.tags.split(",").map((i: string) => i.trim()).filter(Boolean)
  return <QuizMetaInfo>info
}

export function loadInfo(s: string): Partial<QuizMetaInfo> | undefined {
  const object = YAML.load(s) as Record<string, unknown>
  if (!object)
    return undefined

  return object
}

export async function loadQuiz(dir: string): Promise<Quiz> {
  const files = await fg(["*.vue", "*.js", "*.ts", "*.css"], {
    cwd: path.resolve(QUIZ_ROOT, dir),
  })

  const content = await Promise.all(
    files.map(async file => ({
      [file]: await loadFile(path.join(QUIZ_ROOT, dir, file)) || "",
    })),
  )

  const quizLink = normalizeSFCLink(content.reduce((pre, cur) => ({ ...pre, ...cur }), {}))
  const readmePath = path.join(QUIZ_ROOT, dir, "README.md")
  const infoPath = path.join(QUIZ_ROOT, dir, "info.yml")

  return {
    path: dir,
    quizLink,
    no: Number(dir.replace(/^(\d+)-.*/, "$1")),
    readme: await loadLocaleVariations(readmePath, cleanUpREADME),
    info: await loadLocaleVariations(infoPath, loadInfo),
  }
}

export async function loadQuizes(): Promise<Quiz[]> {
  const folders = await fg("{0..9}*-*", {
    onlyDirectories: true,
    cwd: QUIZ_ROOT,
  })

  const quizes = await Promise.all(
    folders.map(async dir => await loadQuiz(dir)),
  )

  return quizes
}
