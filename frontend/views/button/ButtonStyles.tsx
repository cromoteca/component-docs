import { Button } from "@hilla/react-components/Button.js";

export default function ButtonStyles() {
    return (
        <div className='flex p-l gap-m'>
            <Button theme='primary'>Primary</Button>
            <Button theme='secondary'>Secondary</Button>
            <Button theme='tertiary'>Tertiary</Button>
        </div>
    );
}
