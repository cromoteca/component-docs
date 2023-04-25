import { MultiSelectComboBox } from "@hilla/react-components/MultiSelectComboBox.js";
import { TextArea } from "@hilla/react-components/TextArea.js";
import { useState } from "react";
import { Country, useCountries } from "../Countries.js";

export default function MultiSelectComboBoxOnChange() {
  const [selectedCountries, setSelectedCountries] = useState<Country[]>([]);
  const countries = useCountries();

  return (
    <>
      <MultiSelectComboBox
        style={{ width: "300px" }}
        label="Countries"
        items={countries}
        itemLabelPath="name"
        itemIdPath="id"
        onSelectedItemsChanged={({ detail: { value } }) =>
          setSelectedCountries(value)
        }
      />
      <TextArea
        readonly
        label="Selected countries"
        value={selectedCountries.map((c) => c.name).join(", ")}
      />
    </>
  );
}
