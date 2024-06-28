export type Card = {
  createdAt: Date;
  id: string;
  name: string | null;
  suit?: "Option1" | null;
  updatedAt: Date;
  value: number | null;
};
