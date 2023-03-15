import { RichTextEditor } from "@hilla/react-components/RichTextEditor.js";
import { richTextDelta } from "./templates.js";

export default function RichTextEditorCompact() {
  return (
    <RichTextEditor
      style={{ maxHeight: "400px" }}
      theme="compact"
      value={richTextDelta}
    />
  );
}
