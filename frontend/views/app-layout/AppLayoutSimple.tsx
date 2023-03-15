import { AppLayout } from "@hilla/react-components/AppLayout.js";
import { DrawerToggle } from "@hilla/react-components/DrawerToggle.js";
import { Tab } from "@hilla/react-components/Tab.js";
import { Tabs } from "@hilla/react-components/Tabs.js";

export default function AppLayoutSimple() {
  return (
    <AppLayout>
      <DrawerToggle slot="navbar"></DrawerToggle>
      <h3 slot="navbar">MyApp</h3>
      <Tabs slot="drawer" orientation="vertical">
        <Tab>
          <a>Dashboard</a>
        </Tab>
        <Tab>
          <a>Orders</a>
        </Tab>
        <Tab>
          <a>Customers</a>
        </Tab>
        <Tab>
          <a>Products</a>
        </Tab>
        <Tab>
          <a>Documents</a>
        </Tab>
        <Tab>
          <a>Tasks</a>
        </Tab>
        <Tab>
          <a>Analytics</a>
        </Tab>
      </Tabs>
    </AppLayout>
  );
}
