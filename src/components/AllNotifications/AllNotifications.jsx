import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import styles from "./AllNotifications.module.scss";

const AllNo = [
  {
    id: "1",
    fullName: "Taras Karas",
    avatarUrl: "/",
    massage:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque molestias ad dignissimos perferendis modi, officiis cumque inventore sint laudantium commodi, numquam magni repellendus quidem, libero officia quae. Alias, quia cum.",
  },
];

const AllNotificationsContainer = ({ id, fullName, avatarUrl, massage }) => {
  return (
    <div className={styles.notificationContainer}>
      <div>+</div>
      <div className={styles.mainNotification}>
        <Avatar src={avatarUrl} alt={`${fullName}'s avatar`} />
        <Typography
          variant="subtitle1"
          component="div"
          fontSize="14px"
          fontWeight="bold"
          paddingTop="15px">
          {fullName}
        </Typography>
        <p>{massage}</p>
      </div>
    </div>
  );
};

export const AllNotifications = () => {
  return (
    <div>
      {AllNo.map((user, index) => (
        <AllNotificationsContainer key={index} {...user} id={user.id} />
      ))}
    </div>
  );
};
