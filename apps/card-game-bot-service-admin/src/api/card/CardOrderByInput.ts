import { SortOrder } from "../../util/SortOrder";

export type CardOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  suit?: SortOrder;
  updatedAt?: SortOrder;
  value?: SortOrder;
};
