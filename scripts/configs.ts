
import path from "path"
export const QUIZ_ROOT = path.resolve(__dirname, "../questions")
export const VUE_SFC_PLAYGROUND_URL = "https://sfc.vuejs.org/"
export const STACKBLITZ_PLAYGROUND_URL = "https://vuejs-challenges-stackblitz.netlify.app/"
export const REPO = "https://github.com/webfansplz/vuejs-challenges"

export const DIFFICULTY_COLORS: Record<string, string> = {
  warm: "teal",
  easy: "7aad0c",
  medium: "d9901a",
  hard: "de3d37",
  extreme: "b11b8d",
}

export const DIFFICULTY_RANK = [
  "warm",
  "easy",
  "medium",
  "hard",
  "extreme",
]
