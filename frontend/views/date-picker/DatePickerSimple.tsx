import { DatePicker } from "@hilla/react-components/DatePicker.js";

export default function DatePickerSimple() {
    return (
        <div className='flex p-l gap-m'>
            <DatePicker label='Start date' />
        </div>
    );
}
