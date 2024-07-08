import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { TestWhereUniqueInput } from "../test/TestWhereUniqueInput";

export type UserTestWhereInput = {
  id?: StringFilter;
  score?: IntNullableFilter;
  user?: UserWhereUniqueInput;
  test?: TestWhereUniqueInput;
};
