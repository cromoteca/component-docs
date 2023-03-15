import { RichTextEditor } from "@hilla/react-components/RichTextEditor.js";
import { richTextDelta } from "./templates.js";

export default function RichTextEditorAutoHeight() {
  return (
    <RichTextEditor
      style={{ minHeight: "200px", maxHeight: "400px" }}
      value={richTextDelta}
    />
  );
}
