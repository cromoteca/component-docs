import { Crud } from "@hilla/react-components/Crud.js";
import { usePeople } from "../People.js";

export default function CrudEditorAside() {
  const people = usePeople();

  return (
    <Crud
      editorPosition="aside"
      include="firstName, lastName, email, profession"
      items={people}
    />
  );
}
