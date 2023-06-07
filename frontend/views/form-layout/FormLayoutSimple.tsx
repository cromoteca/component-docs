import { FormLayout } from "@hilla/react-components/FormLayout.js";
import { PasswordField } from "@hilla/react-components/PasswordField.js";
import { TextField } from "@hilla/react-components/TextField.js";

export default function FormLayoutSimple() {
  return (
    <FormLayout
      responsiveSteps={[
        // Use one column by default
        { minWidth: 0, columns: 1 },
        // Use two columns, if layout's width exceeds 500px
        { minWidth: "500px", columns: 2 },
      ]}
    >
      <TextField label="First name"></TextField>
      <TextField label="Last name"></TextField>
      {/*// @ts-ignore https://github.com/vaadin/react-components/issues/70 */}
      <TextField label="Username" colspan="2"></TextField>
      <PasswordField label="Password"></PasswordField>
      <PasswordField label="Confirm password"></PasswordField>
    </FormLayout>
  );
}
