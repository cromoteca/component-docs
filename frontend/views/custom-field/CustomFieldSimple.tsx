import { CustomField } from "@hilla/react-components/CustomField.js";
import { DatePicker } from "@hilla/react-components/DatePicker.js";

export default function CustomFieldSimple() {
    return (
        <CustomField label='Enrollment period'>
            <DatePicker id='start' placeholder='Start date' />
            &ndash;
            <DatePicker id='end' placeholder='End date' />
        </CustomField>
    );
}
