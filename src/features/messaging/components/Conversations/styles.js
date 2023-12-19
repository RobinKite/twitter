export const wrapperSx = {
  padding: "0.5rem 1rem",
  borderRightWidth: "1px",
  borderRightStyle: "solid",
  borderRightColor: (theme) =>
    theme.palette.mode === "light"
      ? theme.palette.dark.light_grey
      : theme.palette.dark.border_grey,

  borderLefttWidth: "1px",
  borderLeftStyle: "solid",
  borderLeftColor: (theme) =>
    theme.palette.mode === "light"
      ? theme.palette.dark.light_grey
      : theme.palette.dark.border_grey,
};

export const titleSx = {
  fontSize: "1.2rem",
  fontWeight: 600,
  color: (theme) =>
    theme.palette.mode === "light"
      ? theme.palette.common.secondary
      : theme.palette.dark.light_grey,
};

export const headerSx = {
  flexDirection: "row",
  justifyContent: "space-between",
  marginBottom: "1rem",
  alignItems: "center",
};

export const buttonsSx = {
  flexDirection: "row",
};
