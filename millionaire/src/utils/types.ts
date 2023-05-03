type UniqueId = number;

type Order = "A" | "B" | "C" | "D";

export enum MoneyType {
  DEFAULT = 'default',
  ACTIVE = 'active',
  DISABLE = 'disable'
}

export enum LayoutType {
  MAIN = 'main',
  FINAL = 'final',
}

export type Answers = {
  order?: Order,
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
  answerState: string
}

export interface ProgressProps {
  questionsNumber: number
}

export interface LayoutProps {
  buttonText: string,
  type: LayoutType,
  goTo: string,
  money?: number
}

export interface MoneyProps {
  id: number,
  questionsNumber: number,
  value: number
}