import { DateTimePicker } from "@hilla/react-components/DateTimePicker.js";

export default function DateTimePickerStepSecond() {
  return (
    <DateTimePicker
      label="Message received"
      step={1}
      value="2020-06-12T15:45:08"
    />
  );
}
