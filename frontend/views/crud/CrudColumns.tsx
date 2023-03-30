import { Crud } from "@hilla/react-components/Crud.js";
import { usePeople } from "../People.js";

export default function CrudColumns() {
  const people = usePeople();

  return (
    <Crud
      items={people}
      exclude="lastName, address, id, subscribe, membership, pictureUrl, manager"
    />
  );
}
