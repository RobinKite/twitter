import React from "react";

import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const ButtonStyled = styled(Button)({

  height: "3em",
  minWidth: "20%",
  margin: 15,
  border: "1px solid #dadce0",
  borderRadius: 150,
  fontSize: 25,
  fontWeight: 700,
  color: "#000000",
  textTransform: "capitalize",
  "&:hover": {
    backgroundColor: "#dadce0",
  },
});
export default ButtonStyled;
// Button.propTypes = {
//   backgroundColor: PropTypes.string,
//   text: PropTypes.string,
//   onClick: PropTypes.func,
// };

// Button.defaultProps = {
//   type: "button",
//   onClick: () => {},
// };

