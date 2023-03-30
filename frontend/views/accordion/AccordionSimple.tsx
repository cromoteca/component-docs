import { Accordion } from "@hilla/react-components/Accordion.js";
import { AccordionPanel } from "@hilla/react-components/AccordionPanel.js";
import { VerticalLayout } from "@hilla/react-components/VerticalLayout.js";

export default function AccordionSimple() {
  return (
    <Accordion>
      <AccordionPanel summary="Personal information">
        <VerticalLayout>
          <span>Sophia Williams</span>
          <span>sophia.williams@company.com</span>
          <span>(501) 555-9128</span>
        </VerticalLayout>
      </AccordionPanel>

      <AccordionPanel summary="Billing address">
        <VerticalLayout>
          <span>4027 Amber Lake Canyon</span>
          <span>72333-5884 Cozy Nook</span>
          <span>Arkansas</span>
        </VerticalLayout>
      </AccordionPanel>

      <AccordionPanel summary="Payment">
        <VerticalLayout>
          <span>MasterCard</span>
          <span>1234 5678 9012 3456</span>
          <span>Expires 06/21</span>
        </VerticalLayout>
      </AccordionPanel>
    </Accordion>
  );
}
