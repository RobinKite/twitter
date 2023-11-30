import { Box } from "@mui/material";
import PropTypes from "prop-types";

export const Main = ({ children }) => {
  return (
    <Box sx={{ minHeight: "100vh" }}>
      {/* <AppRoutes /> */}
      {children}
      {/* <h2>MAIN SECTION</h2>
      <AppRoutes/> */}
    </Box>
  );
};

Main.propTypes = {
  children: PropTypes.oneOfType(PropTypes.node, PropTypes.array),
};
