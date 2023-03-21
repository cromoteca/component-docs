import { MenuBar, MenuBarItem } from "@hilla/react-components/MenuBar.js";
import { VerticalLayout } from "@hilla/react-components/VerticalLayout.js";
import { useState } from "react";

export default function MenuBarSimple() {
  const [selectedItem, setSelectedItem] = useState<MenuBarItem>();

  const items = [
    { text: "View" },
    { text: "Edit" },
    {
      text: "Share",
      children: [
        {
          text: "On social media",
          children: [
            { text: "Facebook" },
            { text: "Twitter" },
            { text: "Instagram" },
          ],
        },
        { text: "By email" },
        { text: "Get link" },
      ],
    },
    {
      text: "Move",
      children: [{ text: "To folder" }, { text: "To trash" }],
    },
    { text: "Duplicate" },
  ];

  return (
    <VerticalLayout theme="spacing">
      <MenuBar
        items={items}
        onItemSelected={({ detail: { value } }) => setSelectedItem(value)}
      />
      <div>Clicked item: {selectedItem?.text}</div>
    </VerticalLayout>
  );
}
