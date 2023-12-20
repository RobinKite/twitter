import { Stack, styled } from "@mui/material";

export const ContainerSX = styled(Stack)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "min-content 1fr max-content",
  maxWidth: "1250px",
  margin: "0 auto",
  backgroundColor: theme.palette[theme.palette.mode].primary,
  flexGrow: 1,
  [theme.breakpoints.down("767")]: {
    gridTemplateColumns: "0 1fr",
  },
}));
