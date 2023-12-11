import { Select, Typography, styled } from "@mui/material";

export const CustomSelectSX = styled(Select)({
  "&": {
    borderRadius: 4,
    color: "#00000099",
    height: "50px",
    padding: "10px",
    gap: "12px",
  },
  "& .MuiSelect-icon": {
    fontSize: "24px",
    color: "#b5bac1",
  },
});

export const LegendSX = styled(Typography)({
  fontSize: "15px",
  color: "#0f1419",
  fontWeight: 700,
  marginBottom: "8px",
});

export const TextSX = styled(Typography)({
  color: "#536471",
  fontSize: "14px",
  lineHeight: "16px",
  marginBottom: "18px",
});
