import { Themes } from "@/themes/theme";

export const postButtonSX = {
  mobile: {
    borderRadius: "100%",
    margin: 0,
    // backgroundColor: "#1d9bf0",
    // color: "#ffffff",
    color: (theme) => theme.palette.light.primary,
    backgroundColor: (theme) => theme.palette[theme.palette.mode].accent,
    bottom: "70px",
    right: "20px",
    top: "",
    height: "50px",
    width: "50px",
    minWidth: 0,
    position: "fixed",

    "&:hover": {
      backgroundColor: (theme) => theme.palette[theme.palette.mode].hover_accent,
    },
  },

  tablet: {
    position: "unset",
    height: "50px",
    width: "50px",
    minWidth: 0,
    // backgroundColor: "#1d9bf0",
    backgroundColor: (theme) => theme.palette[theme.palette.mode].accent,
    borderRadius: "100%",
    alignSelf: "center",
  },

  desktop: {
    // color: "#ffffff",
    color: (theme) => theme.palette.light.primary,
    boxShadow: "none",
    // backgroundColor: " #1d9bf0",
    backgroundColor: (theme) => theme.palette[theme.palette.mode].accent,
    borderRadius: "45px",
    alignSelf: "flex-start",
    fontWeight: 600,
    fontSize: "16px",
    padding: "11px 80px",
    margin: "0.5rem 2rem 0 0",

    "&:hover": {
      boxShadow: "none",
      backgroundColor: "#1a8cd8",
    },
  },
};

export const moreButtonSX = {
  color: (theme) => theme.palette[theme.palette.mode].secondary,
  fontSize: "1.225rem",
  borderRadius: "2rem",
  display: "flex",
  gap: "1.25rem",
  position: "relative",
  fontWeight: 400,
  padding: "12px",
  textTransform: "capitalize",
  minWidth: 0,
  lineHeight: 1,
  alignSelf: "start",

  "&:hover": {
    backgroundColor: (theme) =>
      theme.palette.mode === Themes.LIGHT
        ? theme.palette.light.hover_header
        : theme.palette.dark.hover,
  },

  "& .css-1tnmhci-MuiButtonBase-root-MuiButton-root": {
    justifyContent: "flex-start",
  },
  "& .css-1d6wzja-MuiButton-startIcon": {
    margin: 0,
  },
};

export const logoutButton = {
  width: "100%",
  // color: "#0f1419",
  color: (theme) => theme.palette[theme.palette.mode].secondary,
  backgroundColor: (theme) =>
    theme.palette.mode === Themes.LIGHT
      ? theme.palette.light.secondary
      : theme.palette.dark.light_grey,

  fontSize: "20px",
  fontWeight: 700,
  display: "flex",
  gap: "25px",
  alignSelf: "flex-start",
  justifyContent: "flex-start",
  padding: "16px",
  marginTop: "auto",
  "&:hover": {
    backgroundColor: "#fff",
  },
};
