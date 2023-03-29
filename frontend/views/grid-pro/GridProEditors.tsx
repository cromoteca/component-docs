import { DatePicker } from "@hilla/react-components/DatePicker.js";
import { GridPro } from "@hilla/react-components/GridPro.js";
import { GridProEditColumn } from "@hilla/react-components/GridProEditColumn.js";
import { format, parseISO } from "date-fns";
import people from "./people.json";
import peopleImages from "./peopleImages.json";

export default function GridProEditors() {
  const items = people.map((person, index) => ({
    ...person,
    pictureUrl: peopleImages[index % peopleImages.length],
  }));

  return (
    <GridPro items={items}>
      <GridProEditColumn path="firstName" />
      <GridProEditColumn
        path="membership"
        editorType="select"
        editorOptions={["Regular", "Premium", "VIP"]}
      />
      <GridProEditColumn path="subscriber" editorType="checkbox" />
      <GridProEditColumn<(typeof items)[number]>
        path="birthday"
        renderer={({ item: { birthday } }) => (
          <>{format(parseISO(birthday), "dd/MM/yyyy")}</>
        )}
        editModeRenderer={({ item: { birthday } }) => (
          <DatePicker style={{ width: "100%" }} value={birthday} />
        )}
      />
    </GridPro>
  );
}
