import { Button, Typography, Box } from "@mui/material";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { setShowDialog } from "@/redux/slices/messagingSlice";
import { titleSx, textSx, buttonSx } from "./styles";

export const WelcomeMessage = ({ title, text, buttonText }) => {
  const dispatch = useDispatch();

  return (
    <Box>
      <Typography variant="h2" sx={titleSx}>
        {title}
      </Typography>
      <Typography sx={textSx}>{text}</Typography>
      <Button
        variant="contained"
        onClick={() => dispatch(setShowDialog(true))}
        sx={buttonSx}>
        {buttonText}
      </Button>
    </Box>
  );
};

WelcomeMessage.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};
