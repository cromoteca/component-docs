import { Item } from "@hilla/react-components/Item.js";
import { ListBox } from "@hilla/react-components/ListBox.js";

export default function ListBoxSimple() {
  return (
    <ListBox multiple selectedValues={[0, 2]}>
      <Item>Show assignee</Item>
      <Item>Show due date</Item>
      <Item>Show statux</Item>
    </ListBox>
  );
}
