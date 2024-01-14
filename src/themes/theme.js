import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "light",
    light: {
      primary: "#ffffff",
      secondary: "#000000",
      accent: "#1d9bf0",
      search_light: "#EFF3F4",
      background_light: "#f7f9f9",
      banner: "#cfd9de",
      hover: "#f0f0f0",
      hover_accent: "#1a8cd8",
      hover_header: "#ddd9d9",
      box_shadow: "0 0 15px rgba(101,119,134,0.2), 0 0 3px 1px rgba(101,119,134,0.15)",
    },
    dark: {
      primary: "#000000",
      secondary: "#ffffff",
      accent: "#1d9bf0",
      light_grey: "#E7E9EA",
      text_grey: "#71767B",
      border_grey: "#2F3336",
      background_dark: "#202327",
      banner: "#333639",
      hover: "#16181C",
      hover_accent: "#1a8cd8",
      box_shadow:
        "0px 0px 15px rgba(255, 255, 255, 0.2), 0px 0px 3px 1px rgba(255, 255, 255, 0.15)",
    },
    common: {
      primary: "#536471",
      secondary: "#0f1419",

      like: "#f91880",
    },
  },
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
    MuiTextField: {
      styleOverrides: {
        root: {
          width: "100%",
        },
      },
    },
  },
});

export class Themes {
  static LIGHT = "light";
  static DARK = "dark";
}
