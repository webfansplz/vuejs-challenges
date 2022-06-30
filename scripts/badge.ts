import { SupportedLocale, t } from "./locales"
import { DIFFICULTY_COLORS } from "./configs"
export function generateBadgeURL(label: string, text: string, color: string, args = "") {
  return `https://img.shields.io/badge/${encodeURIComponent(label.replace(/-/g, "--"))}-${encodeURIComponent(text.replace(/-/g, "--"))}-${color}${args}`
}

export function generateBadge(label: string, text: string, color: string, args = "") {
  return `<img src="${generateBadgeURL(label, text, color, args)}" alt="${text}"/>`
}

export function generateBadgeLink(url: string, label: string, text: string, color: string, args = "") {
  return `<a href="${url}" target="_blank">${generateBadge(label, text, color, args)}</a> `
}

export function generateDifficultyBadge(difficulty: string, locale: SupportedLocale) {
  return generateBadge("", t(locale, `difficulty.${difficulty}`), DIFFICULTY_COLORS[difficulty])
}

export function generateDifficultyBadgeInverted(difficulty: string, locale: SupportedLocale, count: number) {
  return generateBadge(t(locale, `difficulty.${difficulty}`), count.toString(), DIFFICULTY_COLORS[difficulty])
}
