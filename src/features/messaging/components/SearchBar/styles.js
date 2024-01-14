import { Themes } from "@/themes/theme";

export const inputStyle = {
  fontSize: "14px",
};

export const inputWrapperSx = {
  flexDirection: "row",
  padding: "0.75rem",
  borderRadius: "2rem",
  alignItems: "center",
  columnGap: "0.25rem",
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: (theme) =>
    theme.palette.mode === Themes.LIGHT
      ? theme.palette.dark.light_grey
      : theme.palette.dark.border_grey,
};

export const searchBarSx = {
  paddingTop: "1rem",
  paddingBottom: "1rem",
};
