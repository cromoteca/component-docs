import { Tab } from "@hilla/react-components/Tab.js";
import { Tabs } from "@hilla/react-components/Tabs.js";

export default function TabsStates() {
  return (
    <Tabs>
      <Tab>Selected</Tab>
      <Tab>Unselected</Tab>
      <Tab disabled>Disabled</Tab>
    </Tabs>
  );
}
