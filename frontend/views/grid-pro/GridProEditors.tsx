import { DatePicker } from "@hilla/react-components/DatePicker.js";
import { GridPro } from "@hilla/react-components/GridPro.js";
import { GridProEditColumn } from "@hilla/react-components/GridProEditColumn.js";
import { format, parseISO } from "date-fns";
import { Person, usePeople } from "./People.js";

export default function GridProEditors() {
  const people = usePeople();

  return (
    <GridPro items={people}>
      <GridProEditColumn path="firstName" />
      <GridProEditColumn
        path="membership"
        editorType="select"
        editorOptions={["Regular", "Premium", "VIP"]}
      />
      <GridProEditColumn path="subscriber" editorType="checkbox" />
      <GridProEditColumn<Person>
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
