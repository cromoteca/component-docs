import { DatePicker } from "@hilla/react-components/DatePicker.js";

export default function DatePickerNoAutoOpen() {
    return (
        <DatePicker label='Start date' autoOpenDisabled />
    );
}
