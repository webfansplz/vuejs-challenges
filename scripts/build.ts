
import { loadQuizes } from "./loader"
import { updateQuizREADME, updateIndexREADME } from "./readme"

export async function build() {
  const quizes = await loadQuizes()
  quizes.sort((a, b) => a.no - b.no)
  await updateQuizREADME(quizes)
  await updateIndexREADME(quizes)
}

build()
