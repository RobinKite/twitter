import Button from "@mui/material/Button";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";

export const FollowButtonStyled = styled(Button, {
  shouldForwardProp: (prop) => prop !== "isFollowing",
})(({ isFollowing }) => ({
  border: isFollowing ? "1px solid rgb(207, 217, 222)" : "1px solid transparent",
  borderRadius: 50,
  fontSize: "14px",
  color: isFollowing ? "rgb(0, 0, 0)" : "rgb(248, 248, 248)",
  backgroundColor: isFollowing ? "rgb(248, 248, 248)" : "rgb(0, 0, 0)",
  textTransform: "capitalize",
  transition: "background-color 250ms linear, color 250ms linear",
  boxShadow: "none",
  display: "flex",
  marginLeft: "auto",

  "& p": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: 700,
  },

  "&:hover": {
    backgroundColor: isFollowing ? "rgb(255, 0, 0, 0.08)" : "rgb(0, 0, 0)",
    color: isFollowing ? "rgb(255, 0, 0)" : "rgb(255, 255, 255)",
    boxShadow: "none",
  },

  "&:focus": {
    backgroundColor: isFollowing ? "rgb(255, 0, 0, 0.08)" : "rgb(0, 0, 0)",
    color: isFollowing ? "rgb(255, 0, 0)" : "rgb(255, 255, 255)",
    boxShadow: "none",
  },
}));

FollowButtonStyled.propTypes = {
  isFollowing: PropTypes.bool,
};

FollowButtonStyled.defaultProps = {
  isFollowing: false,
};
