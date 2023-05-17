import {
  Grid,
  GridDataProviderCallback,
  GridDataProviderParams,
} from "@hilla/react-components/Grid.js";
import { GridColumn } from "@hilla/react-components/GridColumn.js";
import { GridTreeColumn } from "@hilla/react-components/GridTreeColumn.js";
import { Person, usePeople } from "../People.js";
import { useCallback } from "react";

export default function TreeGridSimple() {
  const people = usePeople();

  const dataProvider = useCallback(
    async (
      params: GridDataProviderParams<Person>,
      callback: GridDataProviderCallback<Person>
    ) => {
      const filtered = people.filter(
        (p) => !params.parentItem || p.managerId === params.parentItem.id
      );
      return callback(filtered, filtered.length);
    },
    []
  );

  return (
    <Grid itemHasChildrenPath="manager" dataProvider={dataProvider}>
      <GridTreeColumn path="firstName" />
      <GridColumn path="lastName" />
      <GridColumn path="email" />
    </Grid>
  );
}
