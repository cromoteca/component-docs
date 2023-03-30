import { Crud } from "@hilla/react-components/Crud.js";
import { usePeople } from "../People.js";

export default function CrudEditorBottom() {
  const people = usePeople();

  return (
    <Crud
      editorPosition="bottom"
      include="firstName, lastName, email, profession"
      items={people}
    />
  );
}
