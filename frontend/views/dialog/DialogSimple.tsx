import { Button } from "@hilla/react-components/Button.js";
import { Dialog } from "@hilla/react-components/Dialog.js";
import { TextField } from "@hilla/react-components/TextField.js";
import { VerticalLayout } from "@hilla/react-components/VerticalLayout.js";
import { useState } from "react";

export default function DialogSimple() {
    const [opened, setOpened] = useState(true);

    return (
        <>
            <Dialog
                opened={opened}
                onOpenedChanged={({ detail: { value } }) => setOpened(value)}
                header={
                    <h3 className='m-0'>
                        New employee
                    </h3>
                }
                footer={
                    <div className='flex gap-m'>
                        <Button onClick={() => setOpened(false)}>Cancel</Button>
                        <Button onClick={() => setOpened(false)} theme='primary'>Add</Button>
                    </div>
                }>
                <VerticalLayout style={{ width: '18rem', alignItems: 'stretch' }}>
                    <TextField label='First name' />
                    <TextField label='Last name' />
                </VerticalLayout>
            </Dialog>
            <Button onClick={() => setOpened(!opened)}>Show dialog</Button>
        </>
    );
}
