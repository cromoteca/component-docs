import { AvatarGroup } from "@hilla/react-components/AvatarGroup.js";
import { usePeople } from "../People.js";

export default function AvatarGroupSimple() {
  const persons = usePeople().slice(0, 3);

  return (
    <AvatarGroup
      items={persons.map((person) => ({
        name: `${person.firstName} ${person.lastName}`,
      }))}
    />
  );
}
