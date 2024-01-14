import { Box, Button, IconButton, styled } from "@mui/material";

export const ModalBoxSX = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: theme.palette[theme.palette.mode].primary,
  boxShadow: 24,
  padding: "16px 80px 20px",
  borderRadius: "15px",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
  flexDirection: "column",
  minHeight: "650px",
  width: "600px",
  [theme.breakpoints.down("767")]: {
    width: "100%",
    height: "100%",
    padding: "70px 32px",
    borderRadius: 0,
    justifyContent: "flex-start",
  },
}));

export const ModalTitleSX = styled(Box)(({ theme }) => ({
  marginBottom: "20px",
  fontSize: "30px",
  fontWeight: "700",
  color: theme.palette.common.secondary,
  [theme.breakpoints.down("767")]: {
    fontSize: "26px",
  },
}));

export const SubmitButtonSX = styled(Button)(({ theme }) => ({
  color: theme.palette[theme.palette.mode].primary,
  backgroundColor: theme.palette.common.secondary,
  padding: "0 32px",
  width: "100%",
  height: "50px",
  margin: "0",
  marginTop: "40px",
  borderRadius: 150,
  textTransform: "none",
  "&:hover": {
    backgroundColor: "#272c30",
  },
  "&:disabled": {
    backgroundColor: "#6d6d6d",
    cursor: "not-allowed",
  },
}));

export const CloseButtonSX = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  left: "16px",
  top: "16px",
  color: theme.palette.common.secondary,
}));
