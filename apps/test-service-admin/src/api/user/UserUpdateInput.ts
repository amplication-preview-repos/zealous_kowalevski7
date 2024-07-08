import { InputJsonValue } from "../../types";
import { UserTestUpdateManyWithoutUsersInput } from "./UserTestUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  userTests?: UserTestUpdateManyWithoutUsersInput;
};
