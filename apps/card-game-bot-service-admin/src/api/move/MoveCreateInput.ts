import { GameWhereUniqueInput } from "../game/GameWhereUniqueInput";
import { PlayerWhereUniqueInput } from "../player/PlayerWhereUniqueInput";

export type MoveCreateInput = {
  description?: string | null;
  game?: GameWhereUniqueInput | null;
  player?: PlayerWhereUniqueInput | null;
  timestamp?: Date | null;
};
