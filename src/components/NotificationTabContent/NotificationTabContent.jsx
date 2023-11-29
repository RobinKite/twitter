import { Stack, Typography } from "@mui/material";
import { container, textSX, title } from "./styleSX";
import PropTypes from "prop-types";

export function NotificationTabContent({ text, imageUrl }) {
  return (
    <Stack sx={container}>
      {imageUrl && <img src={imageUrl} alt="image" />}
      <Typography sx={title}>Nothing to see here — yet</Typography>
      <Typography sx={textSX}>{text}</Typography>
    </Stack>
  );
}

NotificationTabContent.propTypes = {
  imageUrl: PropTypes.string,
  text: PropTypes.string,
};

NotificationTabContent.defaultProps = {
  imageUrl: "",
  text: "",
};
