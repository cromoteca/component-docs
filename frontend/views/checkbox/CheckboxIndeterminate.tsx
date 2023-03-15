import { Checkbox } from "@hilla/react-components/Checkbox.js";
import { CheckboxGroup } from "@hilla/react-components/CheckboxGroup.js";
import { VerticalLayout } from "@hilla/react-components/VerticalLayout.js";
import { useState } from "react";

export default function CheckboxIndeterminate() {
    const users = ['Aria Bailey', 'Aaliyah Butler', 'Eleanor Price'];
    const [selectedIds, setSelectedIds] = useState(['0', '2']);

    return (
        <VerticalLayout theme='spacing'>
            <Checkbox
                id='notifyUsers'
                label='Notify users'
                checked={selectedIds.length === users.length}
                indeterminate={selectedIds.length > 0 && selectedIds.length < users.length}
                onCheckedChanged={({ detail: { value } }) => setSelectedIds(value ? users.map((_, index) => `${index}`) : [])}
            />
            <CheckboxGroup
                label='Users to notify'
                theme='vertical'
                value={selectedIds}
                onValueChanged={({ detail: { value } }) => setSelectedIds(value)}
            >
                {users.map((value, index) => <Checkbox key={index} value={`${index}`} label={value} />)}
            </CheckboxGroup>
        </VerticalLayout>
    );
}
