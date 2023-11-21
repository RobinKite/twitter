import MuiButton from "@mui/material/Button";
import { styled } from "@mui/material/styles";

export const Button = styled(MuiButton)(({ theme }) => ({
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
  [theme.breakpoints.down("sm")]: {
    fontSize: 14,
  },
}));
