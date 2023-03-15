import { Select } from "@hilla/react-components/Select.js";

export default function SelectSimple() {
  const criteria = [
    { label: "Most recent first", value: "recent" },
    { label: "Rating: high to low", value: "rating-desc" },
    { label: "Rating: low to high", value: "rating-asc" },
    { label: "Price: high to low", value: "price-desc" },
    { label: "Price: low to high", value: "price-asc" },
  ];

  return (
    <Select
      label="Sort by"
      items={criteria}
      value={criteria && criteria[0]?.value}
    />
  );
}
