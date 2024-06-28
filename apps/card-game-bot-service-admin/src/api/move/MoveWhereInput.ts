import { StringNullableFilter } from "../../util/StringNullableFilter";
import { GameWhereUniqueInput } from "../game/GameWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { PlayerWhereUniqueInput } from "../player/PlayerWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type MoveWhereInput = {
  description?: StringNullableFilter;
  game?: GameWhereUniqueInput;
  id?: StringFilter;
  player?: PlayerWhereUniqueInput;
  timestamp?: DateTimeNullableFilter;
};
