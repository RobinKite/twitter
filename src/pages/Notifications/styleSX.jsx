import { Themes } from "@/themes/theme";

export const title = {
  fontSize: "20px",
  fontWeight: "bold",
  margin: "16px 0 0 16px",
  color: (theme) =>
    theme.palette.mode === Themes.LIGHT
      ? theme.palette.common.secondary
      : theme.palette.dark.light_grey,
};
