import { Typography } from "@mui/material";

export const WelcomeMessage = () => {
  return (
    <Typography
      sx={{
        color: (theme) => theme.palette[theme.palette.mode].secondary,
        marginTop: "0.75rem",
        marginBottom: "1rem",
        padding: "0 20px",
        fontWeight: 500,
        textAlign: "center",
      }}>
      Hello! 😊 Currently, you&#39;re not subscribed to any users, but don&#39;t worry –
      you have access to popular posts in our feed. Explore interesting content and maybe
      discover new friends to follow! 🌟
    </Typography>
  );
};
