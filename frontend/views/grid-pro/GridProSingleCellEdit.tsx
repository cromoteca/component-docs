import { GridPro } from "@hilla/react-components/GridPro.js";
import { GridProEditColumn } from "@hilla/react-components/GridProEditColumn.js";
import people from "./people.json";
import peopleImages from "./peopleImages.json";

export default function GridProSingleCellEdit() {
  const items = people.map((person, index) => ({
    ...person,
    pictureUrl: peopleImages[index % peopleImages.length],
  }));

  return (
    <GridPro items={items} singleCellEdit>
      <GridProEditColumn path="firstName" />
      <GridProEditColumn path="lastName" />
      <GridProEditColumn path="email" />
      <GridProEditColumn path="profession" />
    </GridPro>
  );
}
