import { Button } from "@hilla/react-components/Button.js";
import { DatePicker } from "@hilla/react-components/DatePicker.js";
import { Scroller } from "@hilla/react-components/Scroller.js";
import { TextArea } from "@hilla/react-components/TextArea.js";
import { TextField } from "@hilla/react-components/TextField.js";
import { VerticalLayout } from "@hilla/react-components/VerticalLayout.js";

export default function ScrollerSimple() {
    return (
        <VerticalLayout style={{ border: '1px solid var(--lumo-contrast-20pct)', height: '400px', width: '360px' }}>
            <header className='flex ml-m'>
                <h2 className='mt-s mb-s'>Edit employee</h2>
            </header>
            <Scroller scrollDirection='vertical' className='p-m'>
                <section aria-labelledby='personal-title'>
                    <h3 className='mt-s mb-s'>Personal information</h3>
                    <TextField className='w-full' label='First name' />
                    <TextField className='w-full' label='Last name' />
                    <DatePicker initialPosition='1990-01-01' label='Birthdate' className='w-full' />
                </section>
                <section aria-labelledby='employment-title'>
                    <h3 id='employment-title'>Employment information</h3>
                    <TextField className='w-full' label='Position' />
                    <TextArea className='w-full' label='Additional information' />
                </section>
            </Scroller>
            <footer className='flex ml-m'>
                <Button theme='primary'>Save</Button>
                <Button theme='tertiary'>Reset</Button>
            </footer>
        </VerticalLayout>
    );
}
