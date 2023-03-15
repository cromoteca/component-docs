import { EmailField } from "@hilla/react-components/EmailField.js";
import { HorizontalLayout } from "@hilla/react-components/HorizontalLayout.js";

export default function EmailSimple() {
  return (
    <HorizontalLayout theme="spacing">
      <EmailField
        label="Email address"
        value="julia.scheider@example.com"
        errorMessage="Enter a valid email address"
        clearButtonVisible
      />
      <EmailField
        label="Email address"
        value="This is not an email"
        errorMessage="Enter a valid email address"
        clearButtonVisible
        invalid
      />
    </HorizontalLayout>
  );
}
