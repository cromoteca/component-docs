import { MessageInput } from "@hilla/react-components/MessageInput.js";
import { MessageList } from "@hilla/react-components/MessageList.js";
import { VerticalLayout } from "@hilla/react-components/VerticalLayout.js";
import { useState } from "react";
import { usePeople } from "../People.js";

export default function MessageInputWithList() {
  const person = usePeople()[0];

  const [items, setItems] = useState([
    {
      text: "Nature does not hurry, yet everything gets accomplished.",
      time: "yesterday",
      userName: "Matt Mambo",
      userColorIndex: 1,
    },
    {
      text: "Using your talent, hobby or profession in a way that makes you contribute with something good to this world is truly the way to go.",
      time: "right now",
      userName: "Linsey Listy",
      userColorIndex: 2,
      userImg: person.pictureUrl,
    },
  ]);

  return (
    <VerticalLayout>
      <MessageList items={items} />
      <MessageInput
        onSubmit={({ detail: { value } }) =>
          setItems([
            ...items,
            {
              text: value,
              time: "seconds ago",
              userName: "Milla Sting",
              userColorIndex: 3,
            },
          ])
        }
      />
    </VerticalLayout>
  );
}
