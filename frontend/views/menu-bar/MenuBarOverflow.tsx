import { MenuBar } from "@hilla/react-components/MenuBar.js";
import { SplitLayout } from "@hilla/react-components/SplitLayout.js";

export default function MenuBarOverflow() {
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
    <SplitLayout>
      <MenuBar items={items} />
      <div>Move the splitter to see overflow feature</div>
    </SplitLayout>
  );
}
