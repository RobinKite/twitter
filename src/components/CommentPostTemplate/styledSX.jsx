import TextField from "@mui/material/TextField";
import { Stack, styled } from "@mui/material";
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
  borderBottom: "1px solid rgb(239, 243, 244)",
  width: "100%",
  padding: 0,
  paddingBottom: "8px",
  cursor: "text",

  "& textarea": {
    fontSize: "20px",
    lineHeight: 1.2,
  },
});
export const ButtonPost = styled(MuiButton)(({ theme }) => ({
  marginLeft: "12px",

  borderRadius: "35px",
  padding: "0 16px",
  minHeight: "36px",

  // backgroundColor: "rgb(29, 150, 240)",
  backgroundColor: theme.palette[theme.palette.mode].accent,

  fontSize: "15px",
  fontWeight: 500,
  // color: "white",
  color: theme.palette.light.primary,
  textTransform: "capitalize",

  "&:hover": { backgroundColor: "#1a8cd8" },
  [theme.breakpoints.down("sm")]: {
    fontSize: 14,
  },
}));

export const WrapperSX = styled(Stack)({
  display: "flex",
  flexDirection: "row",
  borderTop: "1px solid rgb(239, 243, 244)",
  borderBottom: "1px solid rgb(239, 243, 244)",
  padding: "16px 16px 8px",
});

export const ConteinerPostSX = styled(Stack)({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100%",
});

export const WrapperImgSX = styled(Stack)({
  display: "flex",
  flexWrap: "wrap",
  paddingTop: "8px",
  fontSize: "15px",
});

export const conteinerFooterPostSX = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
};

export const conteinerSvgPostSX = {
  display: "flex",
  flexDirection: "row",
};
