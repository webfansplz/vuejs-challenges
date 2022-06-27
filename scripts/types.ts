
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
  testLink: string
  path: string
  readme: Record<string, string>
  info: Partial<QuizMetaInfo> | undefined
}
