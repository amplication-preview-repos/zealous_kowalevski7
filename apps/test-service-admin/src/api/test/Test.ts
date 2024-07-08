import { UserTest } from "../userTest/UserTest";
import { Question } from "../question/Question";

export type Test = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  description: string | null;
  userTests?: Array<UserTest>;
  questions?: Array<Question>;
};
