import { MessageInput } from "@hilla/react-components/MessageInput.js";
import { Notification } from "@hilla/react-components/Notification.js";

export default function MessageInputSimple() {
  return (
    <MessageInput
      onSubmit={({ detail: { value } }) =>
        Notification.show(`Message received: ${value}`, { position: "middle" })
      }
    />
  );
}
