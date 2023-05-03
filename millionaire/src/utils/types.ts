type UniqueId = number;

export enum LayoutType {
  MAIN = 'main',
  FINAL = 'final',
}

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
  onSelectAnswer: (answer: Answers) => void,
  index: number
}

export interface LayoutProps {
  buttonText: string,
  type: LayoutType,
  goTo: string,
  money?: number
}