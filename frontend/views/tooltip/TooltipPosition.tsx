import { Icon } from "@hilla/react-components/Icon.js";
import { Tab } from "@hilla/react-components/Tab.js";
import { Tabs } from "@hilla/react-components/Tabs.js";
import { Tooltip } from "@hilla/react-components/Tooltip.js";
import "@vaadin/icons";

export default function TooltipPosition() {
  return (
    <Tabs orientation="vertical">
      <Tab>
        <a tabIndex={-1}>
          <Icon icon="vaadin:home" />
        </a>
        <Tooltip slot="tooltip" text="Home" position="end" />
      </Tab>
      <Tab>
        <a tabIndex={-1}>
          <Icon icon="vaadin:calendar" />
        </a>
        <Tooltip slot="tooltip" text="Calendar" position="end" />
      </Tab>
      <Tab>
        <a tabIndex={-1}>
          <Icon icon="vaadin:chart" />
        </a>
        <Tooltip slot="tooltip" text="Reports" position="end" />
      </Tab>
    </Tabs>
  );
}
