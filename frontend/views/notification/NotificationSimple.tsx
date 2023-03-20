import { Button } from "@hilla/react-components/Button.js";
import {
  Notification,
  NotificationOpenedChangedEvent,
} from "@hilla/react-components/Notification.js";
import { useState } from "react";

export default function NotificationSimple() {
  const [notificationOpened, setNotificationOpened] = useState(false);

  const handleClick = () => {
    setNotificationOpened(true);
    const notification = Notification.show("Financial report generated", {
      position: "middle",
    });
    const handleOpenChanged = (e: NotificationOpenedChangedEvent) => {
      if (!e.detail.value) {
        setNotificationOpened(false);
        notification.removeEventListener("opened-changed", handleOpenChanged);
      }
    };
    notification.addEventListener("opened-changed", handleOpenChanged);
  };

  return (
    <Button onClick={handleClick} disabled={notificationOpened}>
      Try it
    </Button>
  );
}
