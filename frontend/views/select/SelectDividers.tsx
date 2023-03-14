import { Select, SelectItem } from "@hilla/react-components/Select.js";
import { useEffect, useState } from "react";

export default function SelectDividers() {
    const [criteria, setCriteria] = useState<SelectItem[]>();

    useEffect(() => setCriteria([
        { label: 'Most recent first', value: 'recent' },
        { component: 'hr' },
        { label: 'Rating: high to low', value: 'rating-desc' },
        { label: 'Rating: low to high', value: 'rating-asc' },
        { component: 'hr' },
        { label: 'Price: high to low', value: 'price-desc' },
        { label: 'Price: low to high', value: 'price-asc' },
    ]), []);

    return (
        <Select
            label='Sort by'
            items={criteria}
            value={criteria && criteria[0]?.value}
        />
    );
}
