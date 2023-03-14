import { DatePicker } from "@hilla/react-components/DatePicker.js";
import { HorizontalLayout } from "@hilla/react-components/HorizontalLayout.js";
import { TextField } from "@hilla/react-components/TextField.js";

export default function InputFieldRequired() {
    return (
        <HorizontalLayout theme='spacing'>
        <TextField
          label='Name'
          required
          errorMessage='Name is required'
        />
        <DatePicker label='Date of birth' />
      </HorizontalLayout>
    );
}
