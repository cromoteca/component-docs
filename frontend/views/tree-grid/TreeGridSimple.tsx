import {
  Grid,
  GridDataProviderCallback,
  GridDataProviderParams,
} from "@hilla/react-components/Grid.js";
import { GridColumn } from "@hilla/react-components/GridColumn.js";
import { GridTreeColumn } from "@hilla/react-components/GridTreeColumn.js";
import { Person, usePagedPeople, usePeople } from "../People.js";
import { useCallback } from "react";

export default function TreeGridSimple() {
  const dataProvider = useCallback(
    async (
      params: GridDataProviderParams<Person>,
      callback: GridDataProviderCallback<Person>
    ) => {
      const pagedPeople = usePagedPeople({
        count: params.pageSize,
        startIndex: params.page * params.pageSize,
        managerId: params.parentItem ? params.parentItem.id : null,
      });
      return callback(pagedPeople.people, pagedPeople.hierarchyLevelSize);
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
