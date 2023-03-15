import { ComboBox } from "@hilla/react-components/ComboBox.js";

export default function ComboBoxCustomValue() {
  const countries = [
    { id: 1, name: "Finland" },
    { id: 2, name: "Germany" },
    { id: 3, name: "United States" },
  ];

  return (
    <ComboBox
      allowCustomValue
      label="Country"
      itemLabelPath="name"
      itemValuePath="id"
      items={countries}
    />
  );
}
