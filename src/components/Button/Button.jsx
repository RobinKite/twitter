import MuiButton from "@mui/material/Button";
import { styled } from "@mui/material/styles";

export const Button = styled(MuiButton)(({ theme }) => ({
  height: "40px",
  width: "300px",
  // margin: 5,
  border: "0.6px solid #cfd9de",
  borderRadius: 150,
  fontSize: 15,
  fontWeight: 700,
  backgroundColor: "#fff",
  color: "#0f1419",
  textTransform: "none",
  padding: "0 16px",
  fontFamily: "inherit",
  "&:hover": {
    backgroundColor: "#dadce0",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: 14,
  },
}));
