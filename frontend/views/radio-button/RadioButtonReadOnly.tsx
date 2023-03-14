import { RadioButton } from "@hilla/react-components/RadioButton.js";
import { RadioGroup } from "@hilla/react-components/RadioGroup.js";

export default function RadioButtonReadOnly() {
    return (
        <RadioGroup label='Status' readonly>
            <RadioButton value='inProgress' label='In progress' checked />
            <RadioButton value='done' label='Done' />
            <RadioButton value='cancelled' label='Cancelled' />
        </RadioGroup>
    );
}
