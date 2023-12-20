import { Themes } from "@/themes/theme";

export const container = {
  maxWidth: "380px",
  padding: "28px",
  marginLeft: "auto",
  marginRight: "auto",
};

export const titleSX = {
  marginBottom: "8px",

  fontSize: "31px",
  fontWeight: "800",
  // color: "rgb(15, 20, 25)",
  color: (theme) =>
    theme.palette.mode === Themes.LIGHT
      ? theme.palette.common.secondary
      : theme.palette.dark.light_grey,
};

export const textSX = {
  fontSize: "15px",
  lineHeight: "1.33",
  // color: "rgb(83, 100, 113)",
  color: (theme) =>
    theme.palette.mode === Themes.LIGHT
      ? theme.palette.common.primary
      : theme.palette.dark.text_grey,
};
