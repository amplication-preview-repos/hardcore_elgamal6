import { GameUpdateManyWithoutPlayersInput } from "./GameUpdateManyWithoutPlayersInput";
import { MoveUpdateManyWithoutPlayersInput } from "./MoveUpdateManyWithoutPlayersInput";

export type PlayerUpdateInput = {
  email?: string | null;
  games?: GameUpdateManyWithoutPlayersInput;
  moves?: MoveUpdateManyWithoutPlayersInput;
  name?: string | null;
  score?: number | null;
};
