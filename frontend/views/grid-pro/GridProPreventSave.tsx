import {
  GridPro,
  GridProItemPropertyChangedEvent,
} from "@hilla/react-components/GridPro.js";
import { GridProEditColumn } from "@hilla/react-components/GridProEditColumn.js";
import { Notification } from "@hilla/react-components/Notification.js";
import { Person, usePeople } from "../People.js";

export default function GridProPreventSave() {
  const people = usePeople();

  const showErrorNotification = (msg: string) => {
    const notification = Notification.show(msg, { position: "bottom-center" });
    notification.setAttribute("theme", "error");
  };

  const itemPropertyListener = ({
    detail: {
      path,
      item: {
        address: { phone },
        email,
      },
    },
    preventDefault,
  }: GridProItemPropertyChangedEvent<Person>) => {
    switch (path) {
      case "address.phone":
        if (!/^[0-9-]+$/.test(phone)) {
          // Incorrect phone
          preventDefault();
          showErrorNotification("Enter a valid phone number");
        }
        break;
      case "email":
        if (!/^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/.test(email)) {
          // Incorrect email
          preventDefault();
          showErrorNotification("Enter a valid email address");
        }
        break;
      default:
        break;
    }
  };

  return (
    <GridPro items={people} onItemPropertyChanged={itemPropertyListener}>
      <GridProEditColumn path="firstName" />
      <GridProEditColumn path="lastName" />
      <GridProEditColumn path="email" />
      <GridProEditColumn path="address.phone" />
    </GridPro>
  );
}
