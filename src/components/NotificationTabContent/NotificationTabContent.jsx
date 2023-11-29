import { Stack, Typography } from "@mui/material";
import { container, textSX, title } from "./styleSX";
import PropTypes from "prop-types";
import image from "../../assets/verification.png";

export function NotificationTabContent({ imageUrl, text }) {
  return (
    <Stack sx={container}>
      {imageUrl && <img src={image} alt="image" />}
      <Typography sx={title}>Nothing to see here — yet</Typography>
      <Typography sx={textSX}>{text}</Typography>
    </Stack>
  );
}

NotificationTabContent.propTypes = {
  imageUrl: PropTypes.bool,
  text: PropTypes.string,
};
