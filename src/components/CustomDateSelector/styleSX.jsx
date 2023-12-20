import { Select, Typography, styled } from "@mui/material";

export const CustomSelectSX = styled(Select)(({ theme }) => ({
  "&": {
    borderRadius: 4,
    // border: "1px solid #00000039",
    // color: "#00000099",
    color: theme.palette[theme.palette.mode].accent,
    height: "50px",
    padding: "10px",
    gap: "12px",
  },
  "& .MuiSelect-icon": {
    fontSize: "24px",
    // color: "#b5bac1",
    color: theme.palette.common.primary,
  },
}));

export const LegendSX = styled(Typography)(({ theme }) => ({
  fontSize: "15px",
  // color: "#0f1419",
  color: theme.palette.common.secondary,
  fontWeight: 700,
  marginBottom: "8px",
}));

export const TextSX = styled(Typography)(({ theme }) => ({
  // color: "#536471",
  color: theme.palette.common.primary,
  fontSize: "14px",
  lineHeight: "16px",
  marginBottom: "18px",
}));
