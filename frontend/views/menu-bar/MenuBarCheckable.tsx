import {
  MenuBar,
  MenuBarItemSelectedEvent,
  SubMenuItem,
} from "@hilla/react-components/MenuBar.js";

export default function MenuBarCheckable() {
  const items = [
    {
      text: "Options",
      children: [
        { text: "Save automatically", checked: true },
        { text: "Notify watchers" },
      ],
    },
  ];

  const itemSelected = ({ detail: { value } }: MenuBarItemSelectedEvent) => {
    const item = value as SubMenuItem;
    item.checked = !item.checked;
  };

  return <MenuBar items={items} onItemSelected={itemSelected} />;
}
