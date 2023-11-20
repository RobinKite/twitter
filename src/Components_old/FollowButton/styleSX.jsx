import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

export const FollowButtonStyled = styled(Button)(({ isFollowing }) => ({
  height: "40px",
  marginLeft: "auto",
  borderRadius: 25,
  color: isFollowing ? "rgb(0, 0, 0)" : "rgb(248, 248, 248)",
  backgroundColor: isFollowing ? "rgb(248, 248, 248)" : "rgb(0, 0, 0)",
  textTransform: "capitalize",
  "& p": {
    paddingTop: 3,
    fontWeight: "bold",
  },
  "&:hover": {
    backgroundColor: isFollowing ? "rgb(255, 0, 0, 0.08)" : "rgb(0, 0, 0)",
    color: isFollowing ? "rgb(255, 0, 0)" : "rgb(255, 255, 255)",
  },
}));
