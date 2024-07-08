import { SortOrder } from "../../util/SortOrder";

export type UserTestOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  score?: SortOrder;
  userId?: SortOrder;
  testId?: SortOrder;
};
