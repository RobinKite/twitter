import PropTypes from "prop-types";
import { Typography } from "@mui/material";

export const WelcomeMessage = ({ stylesSX }) => {
  return (
    <Typography sx={{ ...stylesSX }}>
      Hello! 😊 Currently, you&#39;re not subscribed to any users, but don&#39;t worry –
      you have access to popular posts in our feed. Explore interesting content and maybe
      discover new friends to follow! 🌟
    </Typography>
  );
};

WelcomeMessage.propTypes = {
  stylesSX: PropTypes.object,
};
