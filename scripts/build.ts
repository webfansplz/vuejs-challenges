
import { loadQuizes } from "./loader"
import { updateQuizREADME, updateIndexREADME } from "./readme"

export async function build() {
  const quizes = await loadQuizes()
  await updateQuizREADME(quizes)
  await updateIndexREADME(quizes)
}

build()
