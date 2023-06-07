import {
  Crud,
  CrudEditedItemChangedEvent,
  crudPath,
} from "@hilla/react-components/Crud.js";
import { Grid } from "@hilla/react-components/Grid.js";
import { GridColumn } from "@hilla/react-components/GridColumn.js";
import { useState } from "react";
import { Person, usePeople } from "../People.js";

export default function CrudOpenEditor() {
  const people = usePeople();
  const [editedItem, setEditedItem] = useState<Person>();

  const onEditedItemChanged = ({
    detail: { value },
  }: CrudEditedItemChangedEvent<Person>) => {
    setEditedItem(value);
  };

  const onDoubleClick = (e: unknown) => {
    // TODO: find the good type for e. This is the original example:
    // onDblClick(e: MouseEvent) {
    //   const target = e.currentTarget as Grid<Person>;
    //   this.editedItem = target.getEventContext(e).item;
    // }
  };

  return (
    <Crud
      title="Work in progress"
      include="firstName, lastName, email, profession"
      editedItem={editedItem}
      items={people}
      onEditedItemChanged={onEditedItemChanged}
    >
      <Grid slot="grid" onDoubleClick={onDoubleClick}>
        <GridColumn {...crudPath("firstName")} header="First name"></GridColumn>
        <GridColumn {...crudPath("lastName")} header="Last name"></GridColumn>
        <GridColumn {...crudPath("email")} header="Email"></GridColumn>
        <GridColumn
          {...crudPath("profession")}
          header="Profession"
        ></GridColumn>
      </Grid>
    </Crud>
  );
}
