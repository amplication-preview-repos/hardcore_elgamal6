import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MoveListRelationFilter } from "../move/MoveListRelationFilter";
import { PlayerWhereUniqueInput } from "../player/PlayerWhereUniqueInput";

export type GameWhereInput = {
  endTime?: DateTimeNullableFilter;
  id?: StringFilter;
  moves?: MoveListRelationFilter;
  player?: PlayerWhereUniqueInput;
  startTime?: DateTimeNullableFilter;
  status?: "Option1";
};
