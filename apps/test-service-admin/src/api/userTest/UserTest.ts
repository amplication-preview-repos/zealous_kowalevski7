import { User } from "../user/User";
import { Test } from "../test/Test";

export type UserTest = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  score: number | null;
  user?: User | null;
  test?: Test | null;
};
