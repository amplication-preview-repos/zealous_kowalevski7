import { Question as TQuestion } from "../api/question/Question";

export const QUESTION_TITLE_FIELD = "correctAnswer";

export const QuestionTitle = (record: TQuestion): string => {
  return record.correctAnswer?.toString() || String(record.id);
};
