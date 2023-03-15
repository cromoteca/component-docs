import { TextArea } from "@hilla/react-components/TextArea.js";
import { useState } from "react";

export default function TextAreaSimple() {
    const charLimit = 140;
    const [text, setText] = useState('Great job. This is excellent!');

    return (
        <TextArea
            label='Comment'
            maxlength={charLimit}
            value={text}
            onValueChanged={({ detail: { value } }) => setText(value)}
            helperText={`${text.length}/${charLimit}`}
        ></TextArea>
    );
}
