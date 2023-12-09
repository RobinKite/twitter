import { Stack, Typography } from "@mui/material";
// import { BsDot } from "react-icons/bs";
// import { useSelector } from "react-redux";

const NotificationAlert = () => {
  //   const notifications = useSelector((state) => state.user.notifications);
  //   const unreadCount = notifications.unreadNotificationsCount || 0;
  //TODO: filter unread notifications and then show this component
  return (
    <>
      {/* {unreadCount > 0 && ( */}
      <Stack>
        <Typography
          sx={{
            position: "absolute",
            top: "-2px",
            right: 0,
            backgroundColor: "#1d9bf0",
            width: "7px",
            height: "7px",
            borderRadius: "50%",
            textAlign: "center",
            color: "#fff",
            fontSize: "12px",
            fontWeight: 700,
            padding: "1px 0",
          }}>
          {/* {unreadCount} */}
        </Typography>
      </Stack>
      {/* )} */}
    </>
  );
};

export default NotificationAlert;
