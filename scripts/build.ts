
import { loadQuizes } from "./loader"
import { updateQuizREADME } from "./readme"

export async function build() {
  const quizes = await loadQuizes()
  await updateQuizREADME(quizes)
}

build()
