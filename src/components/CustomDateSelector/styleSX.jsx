import { Select, Typography, styled } from "@mui/material";

export const CustomSelect = styled(Select)(({ theme }) => ({
  "&": {
    borderRadius: 4,
    border: "1px solid #00000099",
    color: "#00000099",
    height: "50px",
    padding: "10px",
    minWidth: "140px",
    gap: "12px",
  },
  "& .MuiSelect-icon": {
    fontSize: "24px",
    color: "#b5bac1",
  },
  [theme.breakpoints.down("767")]: {
    minWidth: "114px",
  },
}));

export const Legend = styled(Typography)({
  fontSize: "15px",
  color: "#0f1419",
  fontWeight: 700,
  marginBottom: "8px",
});

export const Text = styled(Typography)({
  color: "#536471",
  fontSize: "14px",
  lineHeight: "16px",
  marginBottom: "8px",
});
