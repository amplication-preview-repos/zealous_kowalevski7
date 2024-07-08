import { UserTest as TUserTest } from "../api/userTest/UserTest";

export const USERTEST_TITLE_FIELD = "id";

export const UserTestTitle = (record: TUserTest): string => {
  return record.id?.toString() || String(record.id);
};
