export const titleSx = {
  fontWeight: 800,
  marginBottom: "0.5rem",
  fontSize: "1.9rem",
  color: (theme) =>
    theme.palette.mode === "light"
      ? theme.palette.common.secondary
      : theme.palette.dark.light_grey,
};

export const textSx = {
  marginBottom: "1.75rem",
  fontSize: "0.9rem",
  lineHeight: "1.4",
  // color: "#536471",
  color: (theme) =>
    theme.palette.mode === "light"
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
  // color: "white",
  // backgroundColor: "#1d9bf0",
  borderRadius: "2rem",
  "&:hover": {
    backgroundColor: (theme) => theme.palette[theme.palette.mode].hover_accent,
  },
};
