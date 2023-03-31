import { MessageList } from "@hilla/react-components/MessageList.js";
import { format, subDays, subMinutes } from "date-fns";
import { usePeople } from "../People.js";

export default function MessageListSimple() {
  const person = usePeople()[0];
  const isoMinutes = "yyyy-MM-dd HH:mm";
  const yesterday = format(subDays(new Date(), 1), isoMinutes);
  const fiftyMinutesAgo = format(subMinutes(new Date(), 50), isoMinutes);

  return (
    <MessageList
      items={[
        {
          text: "Linsey, could you check if the details with the order are okay?",
          time: yesterday,
          userName: "Matt Mambo",
          userColorIndex: 1,
        },
        {
          text: "All good. Ship it.",
          time: fiftyMinutesAgo,
          userName: "Linsey Listy",
          userColorIndex: 2,
          userImg: person?.pictureUrl,
        },
      ]}
    />
  );
}
