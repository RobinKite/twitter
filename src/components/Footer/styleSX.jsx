import { Box, Typography, styled } from "@mui/material";

export const FooterContainer = styled(Box)({
  padding: "12px",
  textAlign: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexWrap: "wrap",
  columnGap: "16px",
  paddingY: "20px",
});

export const FooterLink = styled(Typography)({
  color: "#536471",
  fontSize: "13px",
  textDecoration: "none",
});
