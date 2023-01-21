export interface Quiz {
  topic: string;
  raw: string;
  hasCode: boolean;
  question: QuestionOrReference;
  preformated?: QuizPreformated | null;
  variants: QuizVariant[];
  reference?: QuestionOrReference | null;
}

export interface QuestionOrReference {
  html: string;
  text: string;
}
export interface QuizPreformated {
  language: string;
  html: string;
  text: string;
}
export interface QuizVariant {
  isCorrect: boolean;
  html: string;
  text: string;
  proxy?: string;
}
