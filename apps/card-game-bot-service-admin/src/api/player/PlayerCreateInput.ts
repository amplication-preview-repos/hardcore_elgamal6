import { GameCreateNestedManyWithoutPlayersInput } from "./GameCreateNestedManyWithoutPlayersInput";
import { MoveCreateNestedManyWithoutPlayersInput } from "./MoveCreateNestedManyWithoutPlayersInput";

export type PlayerCreateInput = {
  email?: string | null;
  games?: GameCreateNestedManyWithoutPlayersInput;
  moves?: MoveCreateNestedManyWithoutPlayersInput;
  name?: string | null;
  score?: number | null;
};
