import { Stack } from "@mui/material";
import { NotificationItem, NotificationTabContent } from "..";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getNotifications, setNotificationsCount } from "@/redux/slices/userSlice";

const NotificationsList = () => {
  const notifications = useSelector((state) => state.user.notifications);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNotifications());
    dispatch(setNotificationsCount(0));
  }, [dispatch]);

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
