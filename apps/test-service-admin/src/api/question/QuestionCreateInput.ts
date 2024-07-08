import { TestWhereUniqueInput } from "../test/TestWhereUniqueInput";

export type QuestionCreateInput = {
  text?: string | null;
  correctAnswer?: string | null;
  test?: TestWhereUniqueInput | null;
};
