type UniqueId = number;

export type Answers = {
  text: string,
  correct: boolean
}

export interface Questions {
  id: UniqueId,
  question: string,
  answers: Answers[]
}

export interface QuestionsProps extends Questions {
  setQuestionsNumber: React.Dispatch<React.SetStateAction<number>>
}

export interface AnswersProps extends Answers {
  onSelectAnswer: (answer: Answers) => void
}