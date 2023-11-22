import MuiButton from "@mui/material/Button";
import { styled } from "@mui/material/styles";

export const Button = styled(MuiButton)(({ theme }) => ({
  height: "39px",
  maxWidth: "70%",
  margin: 5,
  border: "1px solid #dadce0",
  borderRadius: 150,
  fontSize: 14,
  fontWeight: 700,
  color: "#000000",
  textTransform: "capitalize",
  padding: 0,
  "&:hover": {
    backgroundColor: "#dadce0",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: 14,
  },
}));
