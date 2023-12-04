import { Box, Button, IconButton, Link, Stack, Typography, styled } from "@mui/material";

export const ContainerSX = styled(Box)(({ theme }) => ({
  position: "absolute",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  top: "50%",
  left: "50%",
  alignItems: "center",
  transform: "translate(-50%, -50%)",
  width: "600px",
  height: "650px",
  backgroundColor: "#fff",
  borderRadius: 14,
  boxShadow: 24,
  padding: " 20px 20px 130px ",
  [theme.breakpoints.down("767")]: {
    width: "100%",
    height: "100%",
    borderRadius: 0,
  },
}));

export const LoginFormSX = styled(Stack)(({ theme }) => ({
  width: "364px",
  gap: "12px",
  padding: "0 32px 48px",
  justifyContent: "center",
  [theme.breakpoints.down("767")]: {
    margin: "auto",
  },
}));

export const CloseButtonSX = styled(IconButton)({
  position: "absolute",
  left: "10px",
  top: "10px",
  color: "#0f1419",
});

export const LoginTitleSX = styled(Typography)({
  color: "#0f1419",
  fontSize: "31px",
  fontWeight: 700,
});

export const LoginTextSX = styled(Typography)({
  fontSize: "15px",
  color: "#71767b",
  marginTop: "40px",
});

export const LinkSX = styled(Link)({
  color: "#1d9bf0",
  textDecoration: "none",
  cursor: "pointer",
  "&:hover": {
    textDecoration: "underline",
  },
});

export const LinesSpanSX = styled(Typography)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "300px",
  color: "#0f1419",
  margin: "10px 0",
  fontSize: "17px",
  "&::before": { content: "''", border: "1px solid #eff3f4", width: "45%" },
  "&::after": { content: "''", border: "1px solid #eff3f4", width: "45%" },
});

export const MainButtonSX = styled(Button)({
  height: "40px",
  width: "100%",
  border: "0.6px solid #cfd9de",
  borderRadius: 150,
  fontSize: 15,
  fontWeight: 700,
  backgroundColor: "#fff",
  color: "#0f1419",
  textTransform: "none",
  padding: "0 16px",
  "&:hover": {
    backgroundColor: "#dadce0",
  },
});

export const NextButtonSX = styled(Button)({
  height: "40px",
  width: "100%",
  border: "0.6px solid #cfd9de",
  borderRadius: 150,
  fontSize: 15,
  fontWeight: 700,
  backgroundColor: "#000",
  color: "#fff",
  textTransform: "none",
  padding: "0 16px",
  margin: "12px 0",
  "&:hover": {
    backgroundColor: "#3c3a3a",
  },
});
