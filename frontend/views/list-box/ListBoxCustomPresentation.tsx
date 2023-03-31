import { Avatar } from "@hilla/react-components/Avatar.js";
import { HorizontalLayout } from "@hilla/react-components/HorizontalLayout.js";
import { Item } from "@hilla/react-components/Item.js";
import { ListBox } from "@hilla/react-components/ListBox.js";
import { VerticalLayout } from "@hilla/react-components/VerticalLayout.js";
import { usePeople } from "../People.js";

export default function ListBoxCustomPresentation() {
  const persons = usePeople().slice(0, 5);

  return (
    <ListBox multiple selectedValues={[0, 2]}>
      {persons.map((person) => (
        <Item
          key={person.id}
          style={{ lineHeight: "var(--lumo-line-height-m)" }}
        >
          <HorizontalLayout style={{ alignItems: "center" }} theme="spacing">
            <Avatar
              img={person.pictureUrl}
              name={`${person.firstName} ${person.lastName}`}
            />
            <VerticalLayout>
              <span>{`${person.firstName} ${person.lastName}`}</span>
              <span
                style={{
                  color: "var(--lumo-secondary-text-color)",
                  fontSize: "var(--lumo-font-size-s)",
                }}
              >
                {person.profession}
              </span>
            </VerticalLayout>
          </HorizontalLayout>
        </Item>
      ))}
    </ListBox>
  );
}
