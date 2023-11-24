import { Stack, Typography, styled } from "@mui/material";
import { BsTwitterX } from "react-icons/bs";

export const MainSpan = styled(Typography)(({ theme }) => ({
  fontSize: "64px",
  fontWeight: 700,
  color: "#0f1419",
  margin: "48px 0",
  [theme.breakpoints.down("768")]: {
    fontSize: "40px",
    margin: "40px 0",
  },
}));

export const TextSpan = styled(Typography)(({ theme }) => ({
  fontSize: "31px",
  fontWeight: 700,
  color: "#0f1419",
  margin: "0 0 32px",
  [theme.breakpoints.down("768")]: {
    fontSize: "23px",
    margin: "0 0 20px",
  },
}));

export const OrSpan = styled(Typography)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "300px",
  color: "#0f1419",
  margin: "10px 0",
  fontSize: "15px",
  "&::before": { content: "''", border: "1px solid #eff3f4", width: "45%" },
  "&::after": { content: "''", border: "1px solid #eff3f4", width: "45%" },
});

export const AskingSpan = styled(Typography)({
  fontSize: "17px",
  fontWeight: 700,
  color: "#0f1419",
  margin: "40px 0 20px",
});

export const Container = styled(Stack)(({ theme }) => ({
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
export const ContentStack = styled(Stack)(({ theme }) => ({
  padding: "16px",
  alignItems: "flex-start",
  [theme.breakpoints.down("768")]: {
    paddingTop: 0,
  },
}));

export const IconBox = styled(Stack)(({ theme }) => ({
  padding: "32px",
  [theme.breakpoints.down("1024")]: {
    padding: "0 16px 12px",
  },
}));

export const TwitterX = styled(BsTwitterX)(({ theme }) => ({
  width: "342px",
  height: "308px",
  [theme.breakpoints.down("1024")]: {
    width: "40px",
    height: "40px",
  },
}));
