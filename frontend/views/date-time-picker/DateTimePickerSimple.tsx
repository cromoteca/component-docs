import { DateTimePicker } from "@hilla/react-components/DateTimePicker.js";

export default function DateTimePickerSimple() {
    return (
        <div className='flex p-l gap-m'>
            <DateTimePicker label='Meeting date and time' />
        </div>
    );
}
