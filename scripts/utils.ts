import { zlibSync, strToU8, strFromU8 } from "fflate"
import { defaultLocale } from "./locales"

export function utoa(data: string): string {
  const buffer = strToU8(data)
  const zipped = zlibSync(buffer, { level: 9 })
  const binary = strFromU8(zipped, true)
  return btoa(binary)
}

export function serialize(files) {
  return `#${utoa(JSON.stringify(files))}`
}

export function escapeHtml(unsafe: string) {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
}

export function resolveFilePath(dir: string, name: string, ext: string, locale: string) {
  if (locale === defaultLocale)
    return `${dir}/${name}.${ext}`
  else
    return `${dir}/${name}.${locale}.${ext}`
}
