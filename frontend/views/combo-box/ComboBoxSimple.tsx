import { ComboBox } from "@hilla/react-components/ComboBox.js";

export default function ComboBoxSimple() {
    const countries = [
        { id: 1, name: 'Finland' },
        { id: 2, name: 'Germany' },
        { id: 3, name: 'United States' },
    ];

    return (
        <div className='flex p-l gap-m'>
            <ComboBox
                label='Country'
                itemLabelPath='name'
                itemValuePath='id'
                items={countries}
            />
        </div>
    );
}
