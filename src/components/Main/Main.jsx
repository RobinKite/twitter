import { Stack, useMediaQuery } from "@mui/material";
import PropTypes from "prop-types";

export const Main = ({ children }) => {
  const isMobile = useMediaQuery("(max-width: 767px)");

  return (
    <Stack
      sx={{
        // flexDirection: "row",
        ...(isMobile && { mt: "52px" }),
      }}>
      {children}
    </Stack>
  );
};

Main.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
};
