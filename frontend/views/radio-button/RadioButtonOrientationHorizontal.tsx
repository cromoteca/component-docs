import { RadioButton } from "@hilla/react-components/RadioButton.js";
import { RadioGroup } from "@hilla/react-components/RadioGroup.js";

export default function RadioButtonOrientationHorizontal() {
    return (
        <RadioGroup label='Status' theme='horizontal'>
            <RadioButton value='pending' label='Pending' checked />
            <RadioButton value='submitted' label='Submitted' />
            <RadioButton value='confirmed' label='Confirmed' />
        </RadioGroup>
    );
}
