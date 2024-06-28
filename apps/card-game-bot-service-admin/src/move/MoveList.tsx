import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { GAME_TITLE_FIELD } from "../game/GameTitle";
import { PLAYER_TITLE_FIELD } from "../player/PlayerTitle";

export const MoveList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Moves"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <ReferenceField label="Game" source="game.id" reference="Game">
          <TextField source={GAME_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <ReferenceField label="Player" source="player.id" reference="Player">
          <TextField source={PLAYER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="timestamp" source="timestamp" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
