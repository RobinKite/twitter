import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

export const FollowButtonStyled = styled(Button)(({ isFollowing }) => ({
  marginLeft: "auto",
  border: isFollowing ? "1px solid rgb(207, 217, 222)" : "1px solid transparent",
  borderRadius: 25,
  padding: "0 16px",
  height: "32px",
  fontSize: "15px",
  color: isFollowing ? "rgb(0, 0, 0)" : "rgb(248, 248, 248)",
  backgroundColor: isFollowing ? "rgb(248, 248, 248)" : "rgb(0, 0, 0)",
  textTransform: "capitalize",
  transition: "background-color 250ms linear, color 250ms linear",
  boxShadow: "none",

  "& p": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
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
