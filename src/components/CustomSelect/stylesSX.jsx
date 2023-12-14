export const moreSelectSX = {
  position: "relative",
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: "1px",
  overflow: "hidden",
  whiteSpace: "nowrap",
  width: "1px",
};

export const moreSelectMenuPropsSX = {
  anchorOrigin: {
    vertical: "bottom",
    horizontal: "left",
  },
  transformOrigin: {
    vertical: "bottom",
    horizontal: "right",
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
