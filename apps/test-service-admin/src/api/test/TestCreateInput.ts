import { UserTestCreateNestedManyWithoutTestsInput } from "./UserTestCreateNestedManyWithoutTestsInput";
import { QuestionCreateNestedManyWithoutTestsInput } from "./QuestionCreateNestedManyWithoutTestsInput";

export type TestCreateInput = {
  name?: string | null;
  description?: string | null;
  userTests?: UserTestCreateNestedManyWithoutTestsInput;
  questions?: QuestionCreateNestedManyWithoutTestsInput;
};
