import { TimePicker } from "@hilla/react-components/TimePicker.js";

export default function TimePickerStep() {
    return (
        <TimePicker
            label='Meeting time'
            step={60 * 30}
            value='12:30'
        />
    );
}
