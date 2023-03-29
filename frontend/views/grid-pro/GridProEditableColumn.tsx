import { GridColumn } from "@hilla/react-components/GridColumn.js";
import { GridPro } from "@hilla/react-components/GridPro.js";
import { GridProEditColumn } from "@hilla/react-components/GridProEditColumn.js";
import people from "./people.json";
import peopleImages from "./peopleImages.json";

export default function GridProEditableColumn() {
  const items = people.map((person, index) => ({
    ...person,
    pictureUrl: peopleImages[index % peopleImages.length],
  }));

  return (
    <GridPro items={items} enterNextRow>
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
