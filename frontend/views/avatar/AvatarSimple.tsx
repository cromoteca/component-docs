import { Avatar } from "@hilla/react-components/Avatar.js";
import { usePeople } from "../People.js";

export default function AvatarSimple() {
  const person = usePeople()[0];

  return (
    <>
      <Avatar />
      <Avatar name={`${person.firstName} ${person.lastName}`} />
      <Avatar
        img={person.pictureUrl}
        name={`${person.firstName} ${person.lastName}`}
      />
    </>
  );
}
