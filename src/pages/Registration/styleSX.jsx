import { Stack, Typography, styled } from "@mui/material";
import { BsTwitterX } from "react-icons/bs";

export const TitleSX = styled(Typography)(({ theme }) => ({
  fontSize: "64px",
  fontWeight: 700,
  // color: "#0f1419",
  color: theme.palette.common.secondary,
  margin: "48px 0",
  [theme.breakpoints.down("768")]: {
    fontSize: "40px",
    margin: "40px 0",
  },
}));

export const TextSX = styled(Typography)(({ theme }) => ({
  fontSize: "31px",
  fontWeight: 700,
  // color: "#0f1419",
  color: theme.palette.common.secondary,
  margin: "0 0 32px",
  [theme.breakpoints.down("768")]: {
    fontSize: "23px",
    margin: "0 0 20px",
  },
}));

export const LinesSpanSX = styled(Typography)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "300px",
  // color: "#0f1419",
  color: theme.palette.common.secondary,
  margin: "10px 0",
  fontSize: "15px",
  "&::before": { content: "''", border: "1px solid #eff3f4", width: "45%" },
  "&::after": { content: "''", border: "1px solid #eff3f4", width: "45%" },
}));

export const AccountSpanSX = styled(Typography)(({ theme }) => ({
  fontSize: "17px",
  fontWeight: 700,
  // color: "#0f1419",
  color: theme.palette.common.secondary,
  margin: "40px 0 20px",
}));

export const ContainerSX = styled(Stack)(({ theme }) => ({
  flexGrow: 1,
  alignItems: "center",
  justifyContent: "space-evenly",
  [theme.breakpoints.down("1024")]: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    padding: "20px",
    marginLeft: "auto",
    marginRight: "auto",
  },
}));
export const ContentStackSX = styled(Stack)(({ theme }) => ({
  padding: "16px",
  alignItems: "flex-start",
  [theme.breakpoints.down("768")]: {
    paddingTop: 0,
  },
}));

export const IconBoxSX = styled(Stack)(({ theme }) => ({
  padding: "32px",
  [theme.breakpoints.down("1024")]: {
    padding: "0 16px 12px",
  },
}));

export const TwitterXSX = styled(BsTwitterX)(({ theme }) => ({
  width: "342px",
  height: "308px",
  [theme.breakpoints.down("1024")]: {
    width: "40px",
    height: "40px",
  },
}));
