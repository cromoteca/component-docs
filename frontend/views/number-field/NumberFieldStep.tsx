import { NumberField } from "@hilla/react-components/NumberField.js";

export default function NumberFieldStep() {
    return (
        <NumberField label='Duration (hours)' hasControls step={0.5} value='12.5' />
    );
}
