import { Crud } from "@hilla/react-components/Crud.js";
import { usePeople } from "../People.js";

export default function CrudSimple() {
  const people = usePeople();

  return (
    <Crud items={people} include="firstName, lastName, email, profession" />
  );
}
