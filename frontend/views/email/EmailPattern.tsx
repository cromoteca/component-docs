import { EmailField } from "@hilla/react-components/EmailField.js";

export default function EmailPattern() {
  return (
    <EmailField
      label="Email address"
      value="julia@example.com"
      errorMessage="Enter a valid email address"
      pattern="^.+@example\.com$"
    />
  );
}
