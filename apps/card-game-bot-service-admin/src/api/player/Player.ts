import { Game } from "../game/Game";
import { Move } from "../move/Move";

export type Player = {
  createdAt: Date;
  email: string | null;
  games?: Array<Game>;
  id: string;
  moves?: Array<Move>;
  name: string | null;
  score: number | null;
  updatedAt: Date;
};
