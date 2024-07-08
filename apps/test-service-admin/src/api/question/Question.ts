import { Test } from "../test/Test";

export type Question = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  text: string | null;
  correctAnswer: string | null;
  test?: Test | null;
};
