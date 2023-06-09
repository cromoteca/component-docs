import { GridColumn } from "@hilla/react-components/GridColumn.js";
import { GridPro } from "@hilla/react-components/GridPro.js";
import { GridProEditColumn } from "@hilla/react-components/GridProEditColumn.js";
import { usePeople } from "../People.js";

export default function GridProHighlightReadOnly() {
  const people = usePeople();

  return (
    <GridPro items={people} theme="highlight-read-only-cells">
      <GridColumn path="firstName" />
      <GridColumn path="lastName" />
      <GridColumn path="membership" />
      <GridProEditColumn path="email" header="Email (Editable)" />
    </GridPro>
  );
}
