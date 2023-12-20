import { Box, styled } from "@mui/material";

export const ModalBody = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: "600px",
  width: "100%",
  minHeight: "20em",
  maxHeight: "40em",
  overflowY: "auto",
  overflowX: "hidden",
  display: "flex",
  justifyContent: "flex-start",
  flexDirection: "column",
  textAlign: "center",
  borderRadius: 24,
  paddingLeft: 16,
  paddingRight: 16,
  backgroundColor: theme.palette[theme.palette.mode].primary,
  boxShadow: theme.palette[theme.palette.mode].box_shadow,

  "@media(max-width: 700px)": {
    minWidth: "100%",
    minHeight: "100%",
  },
}));
