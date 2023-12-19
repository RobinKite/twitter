import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "light",
    light: {
      primary: "#ffffff",
      secondary: "#000000",
      accent: "#1d9bf0",
      search_light: "#EFF3F4", // search, border
      background_light: "#f7f9f9",
      banner: "#cfd9de",
      hover: "#00000050",
      hover_accent: "#1a8cd8",
      box_shadow: "#65778620",
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
      box_shadow: "",
    },
    common: {
      primary: "#536471", //grey (text+border)
      secondary: "#0f1419", //black

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

          ":hover": {
            boxShadow: "none",
          },
          ":active": {
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

// const getDesignTokens = (mode: PaletteMode) => ({
//   palette: {
//     mode,
//     ...(mode === 'light'
//       ? {
//           // palette values for light mode
//           primary: amber,
//           divider: amber[200],
//           text: {
//             primary: grey[900],
//             secondary: grey[800],
//           },
//         }
//       : {
//           // palette values for dark mode
//           primary: deepOrange,
//           divider: deepOrange[700],
//           background: {
//             default: deepOrange[900],
//             paper: deepOrange[900],
//           },
//           text: {
//             primary: '#fff',
//             secondary: grey[500],
//           },
//         }),
//   },
// });
