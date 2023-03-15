import { HorizontalLayout } from "@hilla/react-components/HorizontalLayout.js";
import { TextField } from "@hilla/react-components/TextField.js";

export default function InputFieldNonEditable() {
  return (
    <HorizontalLayout theme="spacing">
      <TextField label="Read-only" readonly value="Value" />
      <TextField label="Disabled" disabled value="Value" />
    </HorizontalLayout>
  );
}
