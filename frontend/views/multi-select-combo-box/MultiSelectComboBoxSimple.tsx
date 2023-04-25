import { MultiSelectComboBox } from "@hilla/react-components/MultiSelectComboBox.js";
import { useCountries } from "../Countries.js";

export default function MultiSelectComboBoxSimple() {
  const countries = useCountries();

  return (
    <MultiSelectComboBox
      style={{ width: "300px" }}
      label="Countries"
      items={countries}
      itemLabelPath="name"
      itemIdPath="id"
    />
  );
}
