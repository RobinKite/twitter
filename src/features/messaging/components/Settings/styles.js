import { Themes } from "@/themes/theme";

export const settingsSx = {
  borderRight: "1px solid #eff3f4",
  borderRightColor: (theme) =>
    theme.palette.mode === Themes.LIGHT
      ? theme.palette.light.search_light
      : theme.palette.dark.border_grey,
};

export const titleSx = {
  fontWeight: 600,
  fontSize: "1.25rem",
  color: (theme) =>
    theme.palette.mode === Themes.LIGHT
      ? theme.palette.common.secondary
      : theme.palette.dark.light_grey,
};

export const headerSx = {
  flexDirection: "row",
  columnGap: "2rem",
  alignItems: "center",
  padding: "0.5rem 1rem 0.5rem 0.35rem",
};

export const checkboxGroupSx = {
  paddingLeft: "0.75rem",
  paddingRight: "0.5rem",
};

export const radioGroupSx = {
  display: "flex",
  flexDirection: "column",
  rowGap: "0.35rem",
  color: (theme) =>
    theme.palette.mode === Themes.LIGHT
      ? theme.palette.common.secondary
      : theme.palette.dark.light_grey,
};

export const settingTitleSx = {
  fontWeight: 600,
  fontSize: "0.9375rem",
  color: (theme) =>
    theme.palette.mode === Themes.LIGHT
      ? theme.palette.common.secondary
      : theme.palette.dark.light_grey,
};

export const settingDescriptionSx = {
  fontSize: "0.8rem",
  color: (theme) =>
    theme.palette.mode === Themes.LIGHT
      ? theme.palette.common.primary
      : theme.palette.dark.text_grey,
  marginBottom: "0.25rem",
};

export const settingWrapperSx = {
  display: "flex",
  padding: "0.75rem 0.5rem 1rem 0.75rem",
  marginTop: "0.75rem",
};
