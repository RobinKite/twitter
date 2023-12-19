import MuiButton from "@mui/material/Button";
import { styled } from "@mui/material/styles";

export const Button = styled(MuiButton)(({ theme }) => ({
  height: "40px",
  minWidth: "300px",

  border: "0.6px solid #cfd9de",
  borderRadius: 150,
  fontSize: 15,
  fontWeight: 700,
  // backgroundColor: "#fff",
  // color: "#0f1419",
  backgroundColor: theme.palette[theme.palette.mode].primary,
  color: theme.palette.common.secondary,
  textTransform: "none",
  padding: "0 16px",
  fontFamily: "inherit",
  "&:hover": {
    backgroundColor: (theme) => theme.palette[theme.palette.mode].hover,
    // backgroundColor: theme.palette.common.primary,
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: 14,
  },
}));
