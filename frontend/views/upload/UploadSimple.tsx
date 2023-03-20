import { Notification } from "@hilla/react-components/Notification.js";
import {
  Upload,
  UploadBeforeEvent,
  UploadFile,
} from "@hilla/react-components/Upload.js";
import { UploadEndpoint } from "Frontend/generated/endpoints.js";
import { useState } from "react";

export default function UploadSimple() {
  const [files, setFiles] = useState<UploadFile[]>([]);

  const sendToServer = async (e: UploadBeforeEvent) => {
    e.preventDefault();
    const file = e.detail.file;
    file.uploading = true;
    const buffer = await file.arrayBuffer();
    await UploadEndpoint.upload(file.name, [...new Int8Array(buffer)]);
    Notification.show(`Uploaded ${file.name}`);
    file.held = false;
    file.status = "";
    file.complete = true;
    setFiles([file, ...files]);
    return false;
  };

  return (
    <div className="flex-wrap gap-m">
      <Upload
        files={files}
        onUploadBefore={sendToServer}
        onFilesChanged={({ detail: { value } }) => setFiles(value)}
        accept="image/*"
        capture="camera"
      />
      <div className="flex p-m gap-m">
        {files.map((file) => (
          <img
            key={file.name}
            src={URL.createObjectURL(file)}
            style={{ maxWidth: "10rem", maxHeight: "10rem" }}
          />
        ))}
      </div>
    </div>
  );
}
