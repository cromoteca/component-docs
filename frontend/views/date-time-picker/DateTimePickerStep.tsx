import { DateTimePicker } from "@hilla/react-components/DateTimePicker.js";

export default function DateTimePickerStep() {
    return (
        <div className='flex p-l gap-m'>
            <DateTimePicker
                label='Meeting date and time'
                step={60 * 30}
                value='2020-06-12T12:30'
            />
        </div>
    );
}
