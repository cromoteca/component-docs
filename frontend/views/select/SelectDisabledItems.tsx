import { Select } from "@hilla/react-components/Select.js";

export default function SelectDisabledItems() {
  const sizes = [
    { label: "XS (out of stock)", value: "xs", disabled: true },
    { label: "S", value: "s" },
    { label: "M", value: "m" },
    { label: "L", value: "l" },
    { label: "XL", value: "xl" },
  ];

  return <Select label="Size" items={sizes} value={sizes && sizes[4]?.value} />;
}
