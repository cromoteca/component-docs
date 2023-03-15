import { HorizontalLayout } from "@hilla/react-components/HorizontalLayout.js";
import { NumberField } from "@hilla/react-components/NumberField.js";

export default function NumberFieldSimple() {
  return (
    <HorizontalLayout theme="spacing">
      <NumberField label="Balance" value="200">
        <div slot="prefix">$</div>
      </NumberField>
      <NumberField label="Balance" value="200">
        <div slot="suffix">€</div>
      </NumberField>
    </HorizontalLayout>
  );
}
