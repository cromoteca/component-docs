import { Select } from "@hilla/react-components/Select.js";

export default function SelectPlaceholder() {
  const sizes = [
    { label: "XS", value: "xs" },
    { label: "S", value: "s" },
    { label: "M", value: "m" },
    { label: "L", value: "l" },
    { label: "XL", value: "xl" },
  ];

  return <Select label="Size" placeholder="Select size" items={sizes} />;
}
