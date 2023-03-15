import { Tab } from "@hilla/react-components/Tab.js";
import { Tabs } from "@hilla/react-components/Tabs.js";

export default function TabsSimple() {
    return (
        <Tabs>
            <Tab>Details</Tab>
            <Tab>Payment</Tab>
            <Tab>Shipping</Tab>
        </Tabs>
    );
}
