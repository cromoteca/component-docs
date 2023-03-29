import { HorizontalLayout } from "@hilla/react-components/HorizontalLayout.js";
import { NumberField } from "@hilla/react-components/NumberField.js";

export default function NumberFieldStepper() {
  return (
    <HorizontalLayout theme="spacing">
      <NumberField label="Adults" stepButtonsVisible value="1" min={1} />
      <NumberField
        label="Children"
        stepButtonsVisible
        value="0"
        min={0}
        max={9}
        helperText="Age 2-12"
      />
      <NumberField
        label="Infants"
        stepButtonsVisible
        value="0"
        min={0}
        max={9}
      />
    </HorizontalLayout>
  );
}
