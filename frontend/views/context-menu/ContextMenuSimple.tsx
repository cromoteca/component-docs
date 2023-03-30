import { ContextMenu } from "@hilla/react-components/ContextMenu.js";
import { Grid } from "@hilla/react-components/Grid.js";
import { GridColumn } from "@hilla/react-components/GridColumn.js";
import { usePeople } from "../People.js";

export default function ContextMenuSimple() {
  const items = [{ text: "View" }, { text: "Edit" }, { text: "Delete" }];
  const people = usePeople().slice(0, 5);

  return (
<ContextMenu items={items}>
  <Grid items={people} allRowsVisible>
    <GridColumn path="firstName" />
    <GridColumn path="lastName" />
    <GridColumn path="email" />
    <GridColumn header="Phone number" path="address.phone" />
  </Grid>
</ContextMenu>
  );
}
