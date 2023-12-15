import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "Inter, sans-serif",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: "inherit",
          textTransform: "inherit",
          borderRadius: "1.5rem",
          boxShadow: "none",

          "&:hover, &:active, &:focus": {
            boxShadow: "none",
          },
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderBottom: "1px solid #eff3f4",
        },
      },
    },
  },
});
