import { Crud } from "@hilla/react-components/Crud.js";
import { usePeople } from "../People.js";

export default function CrudToolbarHidden() {
  const people = usePeople();

  return <Crud include="firstName, lastName" items={people} noToolbar />;
}
