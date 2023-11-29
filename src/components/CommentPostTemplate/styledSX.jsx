import TextField from "@mui/material/TextField";
import { styled } from "@mui/material";
import MuiButton from "@mui/material/Button";

export const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 30,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 30,
});

export const InputField = styled(TextField)({
  marginLeft: "10px",
  width: "100%",
  height: "70%",
  cursor: "text",

  "& textarea": {
    fontSize: "24px",
    lineHeight: "28px",
  },
});
export const ButtonPost = styled(MuiButton)(({ theme }) => ({
  height: "40px",
  width: "17%",
  margin: 0,
  border: "1px solid #dadce0",
  backgroundColor: "rgb(29, 150, 240)",
  borderRadius: 150,
  fontSize: "20px",
  fontWeight: 700,
  color: "white",
  textTransform: "capitalize",
  padding: 0,

  "&:hover": { backgroundColor: "#1a8cd8" },
  [theme.breakpoints.down("sm")]: {
    fontSize: 14,
  },
}));
