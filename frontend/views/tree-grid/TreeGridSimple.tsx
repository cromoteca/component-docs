import {
  Grid,
  GridDataProviderCallback,
  GridDataProviderParams,
} from "@hilla/react-components/Grid.js";
import { GridColumn } from "@hilla/react-components/GridColumn.js";
import { GridTreeColumn } from "@hilla/react-components/GridTreeColumn.js";
import { Person, usePeople } from "../People.js";

export default function TreeGridSimple() {
  const people = usePeople();

  const dataProvider = async (
    params: GridDataProviderParams<Person>,
    callback: GridDataProviderCallback<Person>
  ) =>
    callback(
      people.filter(
        (p) => !params.parentItem || p.managerId === params.parentItem.id
      )
    );

  return (
    <Grid
      items={people}
      itemHasChildrenPath="manager"
      dataProvider={dataProvider}
    >
      <GridTreeColumn path="firstName" />
      <GridColumn path="lastName" />
      <GridColumn path="email" />
    </Grid>
  );
}
