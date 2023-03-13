import { Checkbox } from "@hilla/react-components/Checkbox.js";

export default function CheckboxDisabled() {
    return (
        <div className='flex p-l gap-m'>
            <Checkbox label='I accept the terms and conditions' disabled />
        </div>
    );
}
