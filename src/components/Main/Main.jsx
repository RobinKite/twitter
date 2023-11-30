import { Box, useMediaQuery } from "@mui/material";
import PropTypes from "prop-types";
export const Main = ({ children }) => {
  const isMobile = useMediaQuery("(max-width: 767px)");
  return (
    <Box
      sx={{
        ...(isMobile && { mt: "52px" }),
      }}>
      {children}
    </Box>
  );
};

Main.propTypes = {
  children: PropTypes.oneOfType(PropTypes.node, PropTypes.array),
};
