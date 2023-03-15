import { DatePicker } from "@hilla/react-components/DatePicker.js";
import { HorizontalLayout } from "@hilla/react-components/HorizontalLayout.js";
import { useState } from "react";

export default function DatePickerRange() {
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  return (
    <HorizontalLayout theme="spacing">
      <DatePicker
        label="Departure date"
        onValueChanged={({ detail: { value } }) => setDepartureDate(value)}
        max={returnDate}
      />
      <DatePicker
        label="Return date"
        onValueChanged={({ detail: { value } }) => setReturnDate(value)}
        min={departureDate}
      />
    </HorizontalLayout>
  );
}
