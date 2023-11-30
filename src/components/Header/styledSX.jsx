export const postButtonSX = {
  mobile: {
    borderRadius: "100%",
    margin: 0,
    backgroundColor: "#1d9bf0",
    color: "#ffffff",
    bottom: "70px",
    right: "20px",
    top: "",
    height: "50px",
    width: "50px",
    minWidth: 0,
    position: "fixed",

    // "&:hover": {
    //   backgroundColor: "#1a8cd8",

    // },
  },
  tablet: {
    position: "unset",
    height: "50px",
    width: "50px",
    minWidth: 0,
    backgroundColor: "#1d9bf0",
    borderRadius: "100%",
    alignSelf: "center",
  },
  desktop: {
    color: "#ffffff",
    boxShadow: "none",
    backgroundColor: " #1d9bf0",
    borderRadius: "45px",
    alignSelf: "flex-start",
    fontWeight: 700,
    fontSize: "17px",
    padding: "11px 80px",
    margin: "0 40px 0 0",

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
  lineHeight: 1,
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

export const moreSelectSX = {
  position: "relative",
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: "1px",
  overflow: "hidden",
  whiteSpace: "nowrap",
  width: "1px",
};

export const logoutButton = {
  width: "100%",
  color: "#0f1419",
  fontSize: "20px",
  fontWeight: 700,
  display: "flex",
  gap: "25px",
  alignSelf: "flex-start",
  justifyContent: "flex-start",
  padding: "16px",
  marginTop: "auto",
  "&:hover": {
    backgroundColor: "#fff",
  },
};

export const moreSelectMenuPropsSX = {
  anchorOrigin: {
    vertical: "bottom",
    horizontal: "left",
  },
  transformOrigin: {
    vertical: "bottom",
    horizontal: "left",
  },
  PaperProps: {
    sx: {
      position: "absolute",
      borderRadius: 5,
      "& .css-6hp17o-MuiList-root-MuiMenu-list": {
        paddingTop: 0,
        paddingBottom: 0,
        backgroundColor: "#ffffff",
      },
      "& .MuiMenuItem-root": {
        padding: 2,
        fontSize: 20,
        fontWeight: 700,
        minWidth: 318,

        gap: 3,
        "&:hover": {
          backgroundColor: "#eff3f4",
        },
      },
    },
  },
};
