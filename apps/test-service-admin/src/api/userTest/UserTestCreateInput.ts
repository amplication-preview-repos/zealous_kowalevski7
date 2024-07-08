import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { TestWhereUniqueInput } from "../test/TestWhereUniqueInput";

export type UserTestCreateInput = {
  score?: number | null;
  user?: UserWhereUniqueInput | null;
  test?: TestWhereUniqueInput | null;
};
