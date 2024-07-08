import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { TestTitle } from "../test/TestTitle";

export const QuestionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="text" multiline source="text" />
        <TextInput label="correctAnswer" source="correctAnswer" />
        <ReferenceInput source="test.id" reference="Test" label="Test">
          <SelectInput optionText={TestTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
