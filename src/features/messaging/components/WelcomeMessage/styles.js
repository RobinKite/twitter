import { Themes } from "@/themes/theme";

export const titleSx = {
  fontWeight: 800,
  marginBottom: "0.5rem",
  fontSize: "1.9rem",
  color: (theme) =>
    theme.palette.mode === Themes.LIGHT
      ? theme.palette.common.secondary
      : theme.palette.dark.light_grey,
};

export const textSx = {
  marginBottom: "1.75rem",
  fontSize: "0.9rem",
  lineHeight: "1.4",
  color: (theme) =>
    theme.palette.mode === Themes.LIGHT
      ? theme.palette.common.primary
      : theme.palette.dark.text_grey,
};

export const buttonSx = {
  fontSize: "1rem",
  margin: "0",
  fontWeight: 700,
  minHeight: 52,
  paddingRight: "2rem",
  paddingLeft: "2rem",
  color: (theme) => theme.palette.light.primary,
  backgroundColor: (theme) => theme.palette[theme.palette.mode].accent,
  borderRadius: "2rem",
  "&:hover": {
    backgroundColor: (theme) => theme.palette[theme.palette.mode].hover_accent,
  },
};
