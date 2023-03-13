import { Checkbox } from "@hilla/react-components/Checkbox.js";
import { CheckboxGroup } from "@hilla/react-components/CheckboxGroup.js";

export default function CheckboxGroupSimple() {
    return (
        <CheckboxGroup
            label='Export data'
            theme='vertical'
            onValueChanged={({ detail: { value } }) => console.log(value)}
        >
            <Checkbox value='0' label='Order ID' />
            <Checkbox value='1' label='Product name' />
            <Checkbox value='2' label='Customer' />
            <Checkbox value='3' label='Status' />
        </CheckboxGroup>
    );
}
