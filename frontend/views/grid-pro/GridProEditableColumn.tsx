import { GridColumn } from "@hilla/react-components/GridColumn.js";
import { GridPro } from "@hilla/react-components/GridPro.js";
import { GridProEditColumn } from "@hilla/react-components/GridProEditColumn.js";
import { usePeople } from "./People.js";

export default function GridProEditableColumn() {
  const people = usePeople();

  return (
    <GridPro items={people} enterNextRow>
      <GridColumn header="Name (read-only)">
        {({ item }) => (
          <>
            {item.firstName} {item.lastName}
          </>
        )}
      </GridColumn>
      <GridProEditColumn header="Profession (editable)" path="profession" />
    </GridPro>
  );
}
