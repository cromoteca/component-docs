import { Button } from "@hilla/react-components/Button.js";
import { ConfirmDialog } from "@hilla/react-components/ConfirmDialog.js";
import { HorizontalLayout } from "@hilla/react-components/HorizontalLayout.js";
import { useState } from "react";

export default function ConfirmDialogSimple() {
    const [opened, setOpened] = useState(true);
    const [status, setStatus] = useState('');

    return (
        <div className='flex p-l gap-m'>
            <ConfirmDialog
                opened={opened}
                onOpenedChanged={({ detail: { value } }) => setOpened(value)}
                header='Unsaved changes'
                rejectButtonVisible={true}
                rejectText='Discard'
                onReject={() => setStatus('Discarded')}
                cancelButtonVisible={true}
                cancelText='Cancel'
                onCancel={() => setStatus('Canceled')}
                confirmText='Save'
                onConfirm={() => setStatus('Saved')}
            >
                There are unsaved changes. Do you want to discard or save them?
            </ConfirmDialog>

            <HorizontalLayout style={{ alignItems: 'center', justifyContent: 'center' }} theme='spacing'>
                <Button onClick={() => setOpened(!opened)}>Show dialog</Button>
                <span hidden={!status}>Status: {status}</span>
            </HorizontalLayout>
        </div>
    );
}
