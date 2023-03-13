import { Button } from "@hilla/react-components/Button.js";
import { useState } from "react";

export default function ButtonSimple() {
    const [counter, setCounter] = useState(0);

    return (
        <div className='flex p-l gap-m'>
            <Button onClick={() => setCounter(counter + 1)}>Clicked {counter} times</Button>
        </div>
    );
}
