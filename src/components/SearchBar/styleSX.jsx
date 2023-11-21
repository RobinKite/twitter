export const searchBarSX = {
  position: "sticky",
  top: "0",
  marginBottom: "6px",
  border: "1px solid transparent",
  paddingTop: "6px",
  paddingBottom: "6px",
  color: "rgb(83, 100, 113)",
  overflow: "hidden",
  backgroundColor: "#ffffff",
  zIndex: 1,

  transition: "border-color 250ms linear, fill 250ms linear",

  "& input:focus": {
    border: "1px solid rgb(29, 155, 240)",
  },

  "&:focus-within svg": {
    fill: "rgb(29, 155, 240)",
  },
};

export const inputSX = {
  "& input": {
    boxSizing: "border-box",
    backgroundColor: "rgb(239, 243, 244)",
    fontSize: "16px",
    color: "rgb(15,20,25)",
    width: "100%",
    minHeight: "42px",
    borderRadius: "25px",
    border: "2px solid transparent",
    padding: "9px",
    paddingLeft: "50px",
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
