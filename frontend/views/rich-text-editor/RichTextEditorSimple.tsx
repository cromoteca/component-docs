import { RichTextEditor } from "@hilla/react-components/RichTextEditor.js";
import { richTextDelta } from "./templates.js";

export default function RichTextEditorSimple() {
  return (
    <RichTextEditor style={{ maxHeight: "400px" }} value={richTextDelta} />
  );
}
