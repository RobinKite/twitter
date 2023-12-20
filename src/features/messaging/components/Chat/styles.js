import { Themes } from "@/themes/theme";

export const wrapperSx = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "start",
  flexGrow: "1",
  borderRight: "1px solid ",
  borderRightColor: (theme) =>
    theme.palette.mode === Themes.LIGHT
      ? theme.palette.dark.light_grey
      : theme.palette.dark.border_grey,
};

export const messageWrapperSx = {
  maxWidth: 360,
  margin: "0 auto",
};
