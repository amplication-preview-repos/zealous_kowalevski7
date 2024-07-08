import { InputJsonValue } from "../../types";
import { UserTestCreateNestedManyWithoutUsersInput } from "./UserTestCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  email?: string | null;
  password: string;
  roles: InputJsonValue;
  userTests?: UserTestCreateNestedManyWithoutUsersInput;
};
