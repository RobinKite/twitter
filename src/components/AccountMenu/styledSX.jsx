export const WrapperAccountMenuSX = {
  borderRadius: "30px",
  alignItems: "center",
  justifyContent: "space-between",
  cursor: "pointer",
  marginTop: "auto",
  marginBottom: "12px",
  transition: "background-color 200ms linear",
  overflow: "hidden",
  marginRight: "0.5rem",

  "&:hover": {
    backgroundColor: (theme) => theme.palette[theme.palette.mode].hover,
  },
  "  .css-1vn8s31-MuiStack-root:hover": { backgroundColor: "unset" },
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
      boxShadow: (theme) => theme.palette[theme.palette.mode].box_shadow,
      "& .css-6hp17o-MuiList-root-MuiMenu-list": {
        paddingTop: 0,
        paddingBottom: 0,
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
