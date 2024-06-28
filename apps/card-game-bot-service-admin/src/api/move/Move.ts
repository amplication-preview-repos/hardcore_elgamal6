import { Game } from "../game/Game";
import { Player } from "../player/Player";

export type Move = {
  createdAt: Date;
  description: string | null;
  game?: Game | null;
  id: string;
  player?: Player | null;
  timestamp: Date | null;
  updatedAt: Date;
};
