export const inputStyle = {
  // caretColor: "#1D9BF0",
  fontSize: "14px",
};

export const inputWrapperSx = {
  flexDirection: "row",
  padding: "0.75rem",
  borderRadius: "2rem",
  alignItems: "center",
  columnGap: "0.25rem",
  // border: "1px solid rgb(207, 217, 222)",
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: (theme) =>
    theme.palette.mode === "light"
      ? theme.palette.dark.light_grey
      : theme.palette.dark.border_grey,
};

export const searchBarSx = {
  paddingTop: "1rem",
  paddingBottom: "1rem",
};
