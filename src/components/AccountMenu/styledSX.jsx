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
  transformOrigin: {
    vertical: "top",
    horizontal: "right",
  },
  PaperProps: {
    sx: {
      position: "absolute",
      borderRadius: 4,
      marginTop: -8,
      "& .css-6hp17o-MuiList-root-MuiMenu-list": {
        paddingTop: 0,
        paddingBottom: 0,
        backgroundColor: "#ffffff",
      },
      "& .MuiMenuItem-root": {
        padding: 2,
        fontSize: 15,
        fontWeight: 700,
        minWidth: 300,

        gap: 3,
        "&:hover": {
          backgroundColor: "#eff3f4",
        },
      },
    },
  },
};