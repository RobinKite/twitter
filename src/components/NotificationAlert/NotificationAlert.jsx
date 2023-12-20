import { Stack, Typography } from "@mui/material";

const NotificationAlert = () => {
  // TODO: filter unread notifications and then show this component
  return (
    <>
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
          }}></Typography>
      </Stack>
    </>
  );
};

export default NotificationAlert;
