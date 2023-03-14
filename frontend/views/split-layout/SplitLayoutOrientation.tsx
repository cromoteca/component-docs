import { SplitLayout } from "@hilla/react-components/SplitLayout.js";
import { TextField } from "@hilla/react-components/TextField.js";
import { VerticalLayout } from "@hilla/react-components/VerticalLayout.js";

export default function SplitLayoutOrientation() {
    return (
        <SplitLayout orientation='vertical' style={{ maxHeight: '350px' }}>
            <VerticalLayout>
                <TextField label='Top 1' className='w-full' />
                <TextField label='Top 2' className='w-full' />
                <TextField label='Top 3' className='w-full' />
                <TextField label='Top 4' className='w-full' />
            </VerticalLayout>
            <VerticalLayout>
                <TextField label='Bottom 1' className='w-full' />
                <TextField label='Bottom 2' className='w-full' />
                <TextField label='Bottom 3' className='w-full' />
                <TextField label='Bottom 4' className='w-full' />
            </VerticalLayout>
        </SplitLayout>
    );
}
