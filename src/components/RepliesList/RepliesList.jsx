import { getNotifications, getNotificationsCount } from "@/redux/slices/userSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NotificationTabContent } from "..";
import { Stack } from "@mui/material";
import ReplyItem from "../NotificationItem/ReplyItem";

const RepliesList = () => {
  const dispatch = useDispatch();
  const allNotifications = useSelector((state) => state.user.notifications);
  const replies = allNotifications.filter(
    (notification) => notification.type === "REPLY",
  );

  useEffect(() => {
    dispatch(getNotifications());
    dispatch(getNotificationsCount(0));
  }, [dispatch]);

  if (replies.length === 0) {
    return (
      <NotificationTabContent
        title="Nothing to see here — yet"
        text="When someone mentions you, you&#39;ll find it here."
      />
    );
  }

  return (
    <Stack>
      {replies.map((reply) => (
        <ReplyItem key={reply.id} reply={reply} />
      ))}
    </Stack>
  );
};

export default RepliesList;
