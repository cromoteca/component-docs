import { NumberField } from "@hilla/react-components/NumberField.js";

export default function NumberFieldStep() {
  return (
    <NumberField
      label="Duration (hours)"
      stepButtonsVisible
      step={0.5}
      value="12.5"
    />
  );
}
