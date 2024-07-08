import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserTestListRelationFilter } from "../userTest/UserTestListRelationFilter";
import { QuestionListRelationFilter } from "../question/QuestionListRelationFilter";

export type TestWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  description?: StringNullableFilter;
  userTests?: UserTestListRelationFilter;
  questions?: QuestionListRelationFilter;
};
