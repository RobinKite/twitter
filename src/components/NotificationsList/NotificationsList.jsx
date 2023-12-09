import { Stack } from "@mui/material";
import { NotificationItem, NotificationTabContent } from "..";
import { useSelector } from "react-redux";

const NotificationsList = () => {
  const notifications = useSelector((state) => state.user.notifications);
  console.log(notifications);

  if (notifications.length === 0) {
    return (
      <NotificationTabContent
        title="Nothing to see here — yet"
        text="From likes to reposts and a whole lot more, this is where all the action happens."
      />
    );
  }

  return (
    <Stack>
      {notifications.map((notification) => (
        <NotificationItem key={notification.id} notification={notification} />
      ))}
    </Stack>
  );
};

export default NotificationsList;
