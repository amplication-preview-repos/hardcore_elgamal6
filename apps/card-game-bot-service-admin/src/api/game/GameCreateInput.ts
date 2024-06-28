import { MoveCreateNestedManyWithoutGamesInput } from "./MoveCreateNestedManyWithoutGamesInput";
import { PlayerWhereUniqueInput } from "../player/PlayerWhereUniqueInput";

export type GameCreateInput = {
  endTime?: Date | null;
  moves?: MoveCreateNestedManyWithoutGamesInput;
  player?: PlayerWhereUniqueInput | null;
  startTime?: Date | null;
  status?: "Option1" | null;
};
