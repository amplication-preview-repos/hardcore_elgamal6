import { StringNullableFilter } from "../../util/StringNullableFilter";
import { GameListRelationFilter } from "../game/GameListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { MoveListRelationFilter } from "../move/MoveListRelationFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type PlayerWhereInput = {
  email?: StringNullableFilter;
  games?: GameListRelationFilter;
  id?: StringFilter;
  moves?: MoveListRelationFilter;
  name?: StringNullableFilter;
  score?: IntNullableFilter;
};
