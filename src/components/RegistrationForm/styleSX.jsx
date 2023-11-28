import { Box, Button, IconButton, styled } from "@mui/material";

export const FormBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#fff",
  boxShadow: 24,
  padding: "16px 80px 20px",
  borderRadius: "15px",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
  flexDirection: "column",
  minHeight: "650px",
  width: "600px",
  // [theme.breakpoints.down("1023")]: {
  //   top: "32%",
  // },
  [theme.breakpoints.down("767")]: {
    top: "50%",
    width: "100%",
    height: "100lvh",
    padding: "70px 32px",
    borderRadius: 0,
    justifyContent: "flex-start",
  },
}));

export const FormTitle = styled(Box)(({ theme }) => ({
  marginBottom: "20px",
  fontSize: "30px",
  fontWeight: "700",
  color: "#0f1419",
  [theme.breakpoints.down("767")]: {
    fontSize: "26px",
  },
}));

export const SubmitButton = styled(Button)({
  backgroundColor: "#0f1419",
  color: "#fff",
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
});

export const CloseButton = styled(IconButton)({
  position: "absolute",
  left: "16px",
  top: "16px",
  color: "#0f1419",
});
