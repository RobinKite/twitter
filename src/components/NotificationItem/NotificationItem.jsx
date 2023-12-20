import PropTypes from "prop-types";
import { PostType } from "@/constants";
import { FollowerItemNotification } from "./FollowerItemNotification";
import { LikeItemNotification } from "./LikeItemNotification";
import { RepostItemNotification } from "./RepostItemNotification";
import ReplyItem from "./ReplyItem";

export const NotificationItem = ({ notification }) => {
  const { initiator } = notification;

  return (
    <>
      {notification.type === PostType.REPLY && <ReplyItem reply={notification} />}
      {notification.type === PostType.FOLLOWER && (
        <FollowerItemNotification initiator={initiator} />
      )}
      {notification.type === PostType.LIKE && (
        <LikeItemNotification notification={notification} />
      )}
      {notification.type === PostType.QUOTE && (
        <RepostItemNotification notification={notification} />
      )}
    </>
  );
};

NotificationItem.propTypes = {
  notification: PropTypes.object,
};
