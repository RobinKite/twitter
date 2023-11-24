import { Box, Button, IconButton, styled } from "@mui/material";

export const FormBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "3px solid red",
  boxShadow: 24,
  padding: "10px 80px",
  borderRadius: "15px",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
  flexDirection: "column",
  minHeight: "650px",
  width: "600px",
  height: "80%",
  [theme.breakpoints.down("767")]: {
    width: "100%",
    height: "100%",
    padding: "10px 32px",
  },
}));

export const FormTitle = styled(Box)(({ theme }) => ({
  marginBottom: "50px",
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
