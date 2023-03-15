import { HorizontalLayout } from "@hilla/react-components/HorizontalLayout.js";
import { IntegerField } from "@hilla/react-components/IntegerField.js";

export default function IntegerFieldSimple() {
  return (
    <HorizontalLayout theme="spacing">
      <IntegerField label="X" value="-1284" />
      <IntegerField label="Y" value="3910" />
    </HorizontalLayout>
  );
}
