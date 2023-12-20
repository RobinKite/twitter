import Button from "@mui/material/Button";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import { Themes } from "@/themes/theme";

export const FollowButtonStyled = styled(Button, {
  shouldForwardProp: (prop) => prop !== "isFollowing",
})(({ isFollowing, theme }) => ({
  border: isFollowing ? "1px solid rgb(207, 217, 222)" : "1px solid transparent",
  borderRadius: 50,
  fontSize: "14px",
  // color: isFollowing ? "rgb(0, 0, 0)" : "rgb(248, 248, 248)",
  // backgroundColor: isFollowing ? "rgb(248, 248, 248)" : "rgb(0, 0, 0)",
  textTransform: "capitalize",
  transition: "background-color 250ms linear, color 250ms linear",
  boxShadow: "none",
  display: "flex",
  marginLeft: "auto",
  minWidth: "110px",
  color: isFollowing
    ? theme.palette[theme.palette.mode].secondary
    : theme.palette[theme.palette.mode].primary,
  backgroundColor: isFollowing
    ? theme.palette[theme.palette.mode].primary
    : theme.palette[theme.palette.mode].secondary,
  "& p": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: 700,
  },

  "&:hover": {
    backgroundColor: isFollowing
      ? theme.palette.dark.background_dark
      : theme.palette.mode === Themes.LIGHT
        ? theme.palette.dark.background_dark
        : theme.palette.light.banner,

    // color: isFollowing ? "rgb(255, 0, 0)" : "rgb(255, 255, 255)",
    boxShadow: "none",
  },

  "&:focus": {
    // backgroundColor: isFollowing ? "rgb(255, 0, 0, 0.08)" : "rgb(0, 0, 0)",
    // color: isFollowing ? "rgb(255, 0, 0)" : "rgb(255, 255, 255)",
    backgroundColor: isFollowing
      ? theme.palette.dark.background_dark
      : theme.palette.mode === Themes.LIGHT
        ? theme.palette.dark.background_dark
        : theme.palette.light.banner,
    boxShadow: "none",
  },
}));

FollowButtonStyled.propTypes = {
  isFollowing: PropTypes.bool,
};

FollowButtonStyled.defaultProps = {
  isFollowing: false,
};
