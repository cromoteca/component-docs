import { RichTextEditor } from "@hilla/react-components/RichTextEditor.js";
import { richTextDelta } from "./templates.js";

export default function RichTextEditorReadOnly() {
  return (
    <RichTextEditor
      style={{ maxHeight: "400px" }}
      readonly
      value={richTextDelta}
    />
  );
}
