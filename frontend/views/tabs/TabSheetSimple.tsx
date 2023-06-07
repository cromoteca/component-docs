import { Tab } from "@hilla/react-components/Tab.js";
import { Tabs } from "@hilla/react-components/Tabs.js";
import { TabSheet } from "@hilla/react-components/TabSheet.js";

export default function TabSheetSimple() {
  return (
    <TabSheet>
      <Tabs slot="tabs">
        <Tab id="dashboard-tab">Dashboard</Tab>
        <Tab id="payment-tab">Payment</Tab>
        <Tab id="shipping-tab">Shipping</Tab>
      </Tabs>

      {/*// @ts-ignore https://github.com/vaadin/react-components/issues/93 */}
      <div tab="dashboard-tab">This is the Dashboard tab content</div>
      {/*// @ts-ignore https://github.com/vaadin/react-components/issues/93 */}
      <div tab="payment-tab">This is the Payment tab content</div>
      {/*// @ts-ignore https://github.com/vaadin/react-components/issues/93 */}
      <div tab="shipping-tab">This is the Shipping tab content</div>
    </TabSheet>
  );
}
