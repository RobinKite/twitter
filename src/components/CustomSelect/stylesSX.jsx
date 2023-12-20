export const moreSelectSX = {
  position: "relative",
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: "1px",
  overflow: "hidden",
  whiteSpace: "nowrap",
  width: "1px",
};

export const moreSelectMenuPropsSX = ({ width, gap, fontSize }) => {
  return {
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

        // boxShadow: "rgba(255, 255, 255, 0.2) 0px 0px 15px, rgba(255, 255, 255, 0.15) 0px 0px 3px 1px",
        boxShadow: (theme) => theme.palette[theme.palette.mode].box_shadow,
        "& .css-6hp17o-MuiList-root-MuiMenu-list": {
          paddingTop: 0,
          paddingBottom: 0,
          backgroundColor: (theme) => theme.palette[theme.palette.mode].primary,
        },
        "& .MuiMenuItem-root": {
          padding: 2,
          fontSize: fontSize,
          fontWeight: 700,
          minWidth: width,
          gap: gap,
          "&:hover": {
            backgroundColor: (theme) => theme.palette[theme.palette.mode].hover,
          },
        },
      },
    },
  };
};
