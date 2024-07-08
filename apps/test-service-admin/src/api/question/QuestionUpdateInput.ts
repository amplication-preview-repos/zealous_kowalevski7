import { TestWhereUniqueInput } from "../test/TestWhereUniqueInput";

export type QuestionUpdateInput = {
  text?: string | null;
  correctAnswer?: string | null;
  test?: TestWhereUniqueInput | null;
};
