import { Crud } from "@hilla/react-components/Crud.js";
import { usePeople } from "../People.js";

export default function CrudToolbarCustom() {
  const people = usePeople();

  return (
    <Crud include="firstName, lastName, email, profession" items={people}>
      <div slot="toolbar">
        Total: <b>{people.length}</b> employees
      </div>
    </Crud>
  );
}
