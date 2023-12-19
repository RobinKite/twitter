export const WrapperAccountMenuSX = {
  // mr: "10px",
  borderRadius: "30px",
  alignItems: "center",
  justifyContent: "space-between",
  // gap: "20px",
  cursor: "pointer",
  marginTop: "auto",
  marginBottom: "12px",
  transition: "background-color 200ms linear",
  overflow: "hidden",
  width: "100%",

  "&:hover": {
    backgroundColor: "rgb(240, 240, 240)",
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
