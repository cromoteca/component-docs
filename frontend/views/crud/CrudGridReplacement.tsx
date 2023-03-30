import { Crud } from "@hilla/react-components/Crud.js";
import { CrudEditColumn } from "@hilla/react-components/CrudEditColumn.js";
import { Grid } from "@hilla/react-components/Grid.js";
import { GridColumn } from "@hilla/react-components/GridColumn.js";
import { usePeople } from "../People.js";

export default function CrudGridReplacement() {
  const people = usePeople();

  return (
    <Crud include="firstName, lastName, email, profession" items={people}>
      <Grid slot="grid">
        <CrudEditColumn />
        <GridColumn path="firstName" header="First name" />
        <GridColumn path="lastName" header="Last name" />
        <GridColumn path="email" header="Email" />
        <GridColumn path="profession" header="Profession" />
      </Grid>
    </Crud>
  );
}
