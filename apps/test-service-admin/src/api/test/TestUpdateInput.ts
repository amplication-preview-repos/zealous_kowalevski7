import { UserTestUpdateManyWithoutTestsInput } from "./UserTestUpdateManyWithoutTestsInput";
import { QuestionUpdateManyWithoutTestsInput } from "./QuestionUpdateManyWithoutTestsInput";

export type TestUpdateInput = {
  name?: string | null;
  description?: string | null;
  userTests?: UserTestUpdateManyWithoutTestsInput;
  questions?: QuestionUpdateManyWithoutTestsInput;
};
