export const postButtonSX = {
  mobile: {
    borderRadius: "100%",
    margin: 0,
    backgroundColor: "#1d9bf0",
    color: "#ffffff",
    // width: 50,
    // height: 60,
    height: 0,
    minWidth: 0,

    padding: "26px 14px",
    "&:hover": {
      backgroundColor: "#1a8cd8",
    },
  },

  desktop: {
    color: "#ffffff",
    boxShadow: "none",
    backgroundColor: " #1d9bf0",
    borderRadius: "45px",
    // height: "52px",
    fontWeight: 700,
    minWidth: "233px",
    fontSize: "17px",
    margin: 0,

    "&:hover": {
      boxShadow: "none",
      backgroundColor: "#1a8cd8",
    },
  },
};

export const moreButtonSX = {
  color: "black",
  fontSize: "1.25rem",
  borderRadius: "2rem",
  display: "flex",
  gap: "1rem",
  position: "relative",
  fontWeight: 400,
  padding: "12px",
  textTransform: "capitalize",
  minWidth: 0,

  "&:hover": {
    backgroundColor: "rgb(221, 217, 217)",
  },

  "& .css-1tnmhci-MuiButtonBase-root-MuiButton-root": {
    justifyContent: "flex-start",
  },
  "& .css-1d6wzja-MuiButton-startIcon": {
    margin: 0,
  },
};
