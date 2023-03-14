import { RadioButton } from "@hilla/react-components/RadioButton.js";
import { RadioGroup } from "@hilla/react-components/RadioGroup.js";

export default function RadioButtonSimple() {
    return (
        <RadioGroup label='Travel class' theme='vertical'>
            <RadioButton value='economy' label='Economy' />
            <RadioButton value='business' label='Business' />
            <RadioButton value='firstClass' label='First Class' />
        </RadioGroup>
    );
}
