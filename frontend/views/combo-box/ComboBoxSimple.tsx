import { ComboBox } from "@hilla/react-components/ComboBox.js";

export default function ComboBoxSimple() {
    const countries = [
        { id: 1, name: 'Finland' },
        { id: 2, name: 'Germany' },
        { id: 3, name: 'United States' },
    ];

    return (
        <ComboBox
            label='Country'
            itemLabelPath='name'
            itemValuePath='id'
            items={countries}
        />
    );
}
