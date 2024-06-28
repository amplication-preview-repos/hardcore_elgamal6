import { SortOrder } from "../../util/SortOrder";

export type MoveOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  gameId?: SortOrder;
  id?: SortOrder;
  playerId?: SortOrder;
  timestamp?: SortOrder;
  updatedAt?: SortOrder;
};
