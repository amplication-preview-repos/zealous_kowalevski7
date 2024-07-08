import { JsonValue } from "type-fest";
import { UserTest } from "../userTest/UserTest";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  userTests?: Array<UserTest>;
};
