import { GameWhereUniqueInput } from "../game/GameWhereUniqueInput";
import { PlayerWhereUniqueInput } from "../player/PlayerWhereUniqueInput";

export type MoveUpdateInput = {
  description?: string | null;
  game?: GameWhereUniqueInput | null;
  player?: PlayerWhereUniqueInput | null;
  timestamp?: Date | null;
};
