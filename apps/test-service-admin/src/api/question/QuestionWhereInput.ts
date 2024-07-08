import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TestWhereUniqueInput } from "../test/TestWhereUniqueInput";

export type QuestionWhereInput = {
  id?: StringFilter;
  text?: StringNullableFilter;
  correctAnswer?: StringNullableFilter;
  test?: TestWhereUniqueInput;
};
