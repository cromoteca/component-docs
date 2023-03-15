import { RichTextEditor } from "@hilla/react-components/RichTextEditor.js";
import { richTextDelta } from "./templates.js";

export default function RichTextEditorNoBorder() {
  return (
    <RichTextEditor
      style={{ maxHeight: "400px" }}
      theme="no-border"
      value={richTextDelta}
    />
  );
}
