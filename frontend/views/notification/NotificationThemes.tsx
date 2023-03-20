import { Button } from "@hilla/react-components/Button.js";
import { Notification } from "@hilla/react-components/Notification.js";
import { MouseEvent } from "react";

export default function NotificationThemes() {
  const themes = ["success", "error", "primary", "contrast"];

  const handleClick = (e: MouseEvent) => {
    const theme = e.currentTarget.textContent!;
    const notification = Notification.show(theme);
    notification.setAttribute("theme", theme);
  };

  return (
    <>
      {themes.map((theme) => (
        <Button key={theme} onClick={handleClick}>
          {theme}
        </Button>
      ))}
    </>
  );
}
