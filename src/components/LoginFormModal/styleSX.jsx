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
  backgroundColor: theme.palette.light.primary,
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

export const CloseButtonSX = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  left: "10px",
  top: "10px",
  color: theme.palette.common.secondary,
}));

export const LoginTitleSX = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.secondary,
  fontSize: "31px",
  fontWeight: 700,
}));

export const LoginTextSX = styled(Typography)(({ theme }) => ({
  fontSize: "15px",
  color: theme.palette.common.primary,
  marginTop: "40px",
}));

export const LinkSX = styled(Link)(({ theme }) => ({
  color: theme.palette.light.accent,
  textDecoration: "none",
  cursor: "pointer",
  "&:hover": {
    textDecoration: "underline",
  },
}));

export const LinesSpanSX = styled(Typography)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "300px",
  color: theme.palette.common.secondary,
  margin: "10px 0",
  fontSize: "17px",
  "&::before": {
    content: "''",
    borderStyle: "solid",
    borderWidth: "1px",
    borderColor: theme.palette.light.search_light,
    width: "45%",
  },
  "&::after": {
    content: "''",
    borderStyle: "solid",
    borderWidth: "1px",
    borderColor: theme.palette.light.search_light,
    width: "45%",
  },
}));

export const MainButtonSX = styled(Button)(({ theme }) => ({
  height: "40px",
  width: "100%",
  border: "0.6px solid #cfd9de",
  borderRadius: 150,
  fontSize: 15,
  fontWeight: 700,
  backgroundColor: theme.palette.light.primary,
  color: theme.palette.common.secondary,
  textTransform: "none",
  padding: "0 16px",
  "&:hover": {
    backgroundColor: theme.palette.light.search_light,
  },
}));

export const NextButtonSX = styled(Button)(({ theme }) => ({
  height: "40px",
  width: "100%",
  border: "0.6px solid #cfd9de",
  borderRadius: 150,
  fontSize: 15,
  fontWeight: 700,
  backgroundColor: theme.palette.light.secondary,
  color: theme.palette.light.primary,
  textTransform: "none",
  padding: "0 16px",
  margin: "12px 0",
  "&:hover": {
    backgroundColor: theme.palette.dark.hover,
  },
}));
