import { Tab } from "@hilla/react-components/Tab.js";
import { Tabs } from "@hilla/react-components/Tabs.js";

export default function TabsOrientation() {
    return (
        <Tabs orientation='vertical'>
            <Tab>Analytics</Tab>
            <Tab>Customers</Tab>
            <Tab>Dashboards</Tab>
            <Tab>Documents</Tab>
            <Tab>Orders</Tab>
            <Tab>Products</Tab>
            <Tab>Tasks</Tab>
        </Tabs>
    );
}
