import { Move } from "../move/Move";
import { Player } from "../player/Player";

export type Game = {
  createdAt: Date;
  endTime: Date | null;
  id: string;
  moves?: Array<Move>;
  player?: Player | null;
  startTime: Date | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
