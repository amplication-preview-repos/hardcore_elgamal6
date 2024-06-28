import { MoveUpdateManyWithoutGamesInput } from "./MoveUpdateManyWithoutGamesInput";
import { PlayerWhereUniqueInput } from "../player/PlayerWhereUniqueInput";

export type GameUpdateInput = {
  endTime?: Date | null;
  moves?: MoveUpdateManyWithoutGamesInput;
  player?: PlayerWhereUniqueInput | null;
  startTime?: Date | null;
  status?: "Option1" | null;
};
