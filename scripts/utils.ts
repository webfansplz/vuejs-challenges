import { defaultLocale } from "./locales"

// buffer to ASCII
const btoa = (data) => {
  return Buffer.from(data, "binary").toString("base64")
}

// prefer old unicode hacks for backward compatibility
// https://base64.guru/developers/javascript/examples/unicode-strings
export function utoa(data: string): string {
  return btoa(unescape(encodeURIComponent(data)))
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
