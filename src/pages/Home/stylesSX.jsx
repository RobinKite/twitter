import { Themes } from "@/themes/theme";

export const homeHeaderSX = {
  position: "relative",
  padding: "16px 0",
  fontSize: "15px",
  fontWeight: 700,
  lineHeight: 1.33,
  textAlign: "center",
  // color: "rgb(15, 20, 25)",
  // color: "rgb(83, 100, 113)",
  color: (theme) =>
    theme.palette.mode === Themes.LIGHT
      ? theme.palette.common.secondary
      : theme.palette.dark.light_grey,

  "&::after": {
    content: '""',
    position: "absolute",
    top: "48px",
    display: "block",
    height: "4px",
    width: "100%",
    borderRadius: "2px",
    backgroundColor: (theme) => theme.palette.dark.accent,
  },
};
