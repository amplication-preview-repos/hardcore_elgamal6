import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type CardWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  suit?: "Option1";
  value?: IntNullableFilter;
};
