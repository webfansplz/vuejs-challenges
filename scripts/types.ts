import type { getOctokit, context } from "@actions/github"
import type Core from "@actions/core"
import type IO from "@actions/io"

export interface QuizMetaInfo {
  title: string
  author: {
    name: string
    github: string
  }
  difficulty: string
  tags: []
}

export interface Quiz {
  no: number
  quizLink: string
  stackblitzLink: Record<string, string>
  path: string
  readme: Record<string, string>
  info: Partial<QuizMetaInfo> | undefined
}

export type Github = ReturnType<typeof getOctokit>
export type Context = typeof context
export type Action = (github: Github, context: Context, core: typeof Core, io: typeof IO) => Promise<void>
