export const searchProgressBarContainerSX = {
  position: "absolute",
  top: "48px",
  borderRadius: "8px",
  minHeight: "100%",
  maxHeight: "50vh",
  width: "100%",
  backgroundColor: "inherit",
  boxShadow: "0 0 15px rgba(101,119,134,0.2), 0 0 3px 1px rgba(101,119,134,0.15)",
  overflowY: "auto",
  zIndex: 3,
};

export const searchBoxSX = {
  padding: "16px",
  fontSize: "15px",
  lineHeight: "1.33",
  // color: "rgb(15,20,25)",
  color: (theme) => theme.palette[theme.palette.mode].secondary,
  transition: "background-color 250ms linear",

  "&:hover": {
    backgroundColor: "rgb(240, 240, 240)",
  },

  "&:focus": {
    backgroundColor: "rgb(240, 240, 240)",
  },
};

export const searchLineSX = {
  height: "1px",
  // border: "1px solid rgba(239, 243, 244, 1.0)",
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: (theme) =>
    theme.palette.mode === "light"
      ? theme.palette.dark.light_grey
      : theme.palette.dark.border_grey,
  width: "100%",
  marginBottom: "4px",
  marginTop: "4px",
};
