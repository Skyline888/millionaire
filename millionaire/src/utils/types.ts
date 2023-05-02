type UniqueId = number;

export type Answers = {
  text: string,
  correct: boolean
}

export type Questions = {
  id: UniqueId,
  question: string,
  answers: Answers[]
}