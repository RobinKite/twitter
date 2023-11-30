import { Stack, Typography } from "@mui/material";
import { container, textSX, titleSX } from "./styleSX";
import PropTypes from "prop-types";

export function NotificationTabContent({ title, text, imageUrl }) {
  return (
    <Stack sx={container}>
      {imageUrl && <img src={imageUrl} alt="image" />}
      <Typography sx={titleSX}>{title}</Typography>
      <Typography sx={textSX}>{text}</Typography>
    </Stack>
  );
}

NotificationTabContent.propTypes = {
  title: PropTypes.string,
  imageUrl: PropTypes.string,
  text: PropTypes.string,
};

NotificationTabContent.defaultProps = {
  title: "",
  imageUrl: "",
  text: "",
};
