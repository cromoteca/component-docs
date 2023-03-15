import { TextField } from "@hilla/react-components/TextField.js";
import { VerticalLayout } from "@hilla/react-components/VerticalLayout.js";

export default function TextFieldAlignment() {
  return (
    <VerticalLayout theme="spacing">
      <TextField value="Left" />
      <TextField value="Center" theme="align-center" />
      <TextField value="Right" theme="align-right" />
    </VerticalLayout>
  );
}
