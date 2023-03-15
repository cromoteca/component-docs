import { Select, SelectItem } from "@hilla/react-components/Select.js";
import { useEffect, useState } from "react";

export default function SelectDisabledItems() {
    const [sizes, setSizes] = useState<SelectItem[]>();

    useEffect(() => setSizes([
        { label: 'XS (out of stock)', value: 'xs', disabled: true, },
        { label: 'S', value: 's' },
        { label: 'M', value: 'm' },
        { label: 'L', value: 'l' },
        { label: 'XL', value: 'xl' },
    ]), []);

    return (
        <Select
            label='Size'
            items={sizes}
            value={sizes && sizes[4]?.value}
        />
    );
}
