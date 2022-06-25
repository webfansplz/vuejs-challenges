import en from "./locales/en.json"
import zhCN from "./locales/zh-CN.json"

export const defaultLocale = "en"

export const supportedLocales = ["en", "zh-CN"] as const

export const messages = {
  "en": en,
  "zh-CN": zhCN,
}

export type SupportedLocale = keyof typeof messages

export function t(locale: SupportedLocale, key: string): string {
  return (messages[locale] && messages[locale][key]) || messages[defaultLocale][key]
}

export function f(name: string, locale: string, ext: string) {
  if (locale === defaultLocale)
    return `${name}.${ext}`
  return `${name}.${locale}.${ext}`
}
