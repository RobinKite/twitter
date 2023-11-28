import { Stack } from "@mui/material";
import PropTypes from "prop-types";

export const Main = ({ children }) => {
  return <Stack>{children}</Stack>;
};

Main.propTypes = {
  children: PropTypes.node.isRequired,
};
