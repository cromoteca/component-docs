import { GridPro } from "@hilla/react-components/GridPro.js";
import { GridProEditColumn } from "@hilla/react-components/GridProEditColumn.js";
import { usePeople } from "../People.js";

export default function GridProEditOnClick() {
  const people = usePeople();

  return (
    <GridPro items={people} editOnClick>
      <GridProEditColumn path="firstName" />
      <GridProEditColumn path="lastName" />
      <GridProEditColumn path="email" />
      <GridProEditColumn path="profession" />
    </GridPro>
  );
}
