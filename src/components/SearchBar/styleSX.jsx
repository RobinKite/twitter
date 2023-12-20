export const searchBarSX = {
  position: "sticky",
  top: "0",
  marginBottom: "6px",
  border: "1px solid transparent",
  paddingTop: "6px",
  paddingBottom: "6px",
  // color: "rgb(83, 100, 113)",
  // backgroundColor: "#ffffff",
  backgroundColor: (theme) => theme.palette[theme.palette.mode].primary,
  color: (theme) => theme.palette.common.primary,
  zIndex: 1,
  borderWidth: "1px",
  boderStyle: "solid",
  borderColor: "transparent",
  transition: "border-color 250ms linear",

  "& input:focus": {
    borderColor: "rgb(29, 155, 240)",
  },
};

export const formSX = {
  "& svg": {
    transition: "fill 250ms linear",
  },

  "&:focus-within svg": {
    fill: "rgb(29, 155, 240)",
  },
};

export const inputSX = {
  "& input": {
    boxSizing: "border-box",
    // color: "rgb(15,20,25)",
    // backgroundColor: "rgb(239, 243, 244)",
    color: (theme) =>
      theme.palette.mode === "light"
        ? theme.palette.light.secondary
        : theme.palette.dark.text_grey,
    backgroundColor: (theme) =>
      theme.palette.mode === "light"
        ? theme.palette.light.search_light
        : theme.palette.dark.background_dark,
    fontSize: "16px",

    width: "100%",
    minHeight: "42px",
    borderRadius: "25px",
    border: "2px solid transparent",
    padding: "9px",
    paddingLeft: "58px",
  },
};

export const searchIconSX = {
  position: "absolute",
  top: "50%",
  left: "20px",
  transform: "translateY(-50%)",
  fill: "currentColor",
};

export const closeIconSX = {
  position: "absolute",
  top: "50%",
  right: "20px",
  transform: "translateY(-50%)",
  fill: "currentColor",
  cursor: "pointer",
};
