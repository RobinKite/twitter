import { Button, Typography, Box } from "@mui/material";
import PropTypes from "prop-types";
import { titleSx, textSx, buttonSx } from "./styles";

export const WelcomeMessage = ({ title, text, buttonText, callback }) => {
  return (
    <Box>
      <Typography variant="h2" sx={titleSx}>
        {title}
      </Typography>
      <Typography sx={textSx}>{text}</Typography>
      <Button variant="contained" onClick={callback} sx={buttonSx}>
        {buttonText}
      </Button>
    </Box>
  );
};

WelcomeMessage.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  callback: PropTypes.func,
};

WelcomeMessage.defaultProps = {
  callback: () => {},
};
