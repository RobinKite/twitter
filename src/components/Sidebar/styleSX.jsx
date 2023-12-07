export const sidebarSX = {
  display: "none",

  "@media screen and (min-width: 900px)": {
    display: "block",
    position: "relative",
    marginLeft: "30px",
    width: "100%",
    minWidth: 360,
    maxWidth: 360,

    backgroundColor: "inherit",
  },
};

export const containerSX = {
  backgroundColor: "rgb(248, 248, 248)",
  borderRadius: "1rem",
};

export const titleSX = {
  padding: "0.75rem 1rem 1rem 1rem",
  fontFamily: "inherit",
  fontSize: "1.25rem",
  fontWeight: 800,
};

export const showMoreSX = {
  cursor: "pointer",
  padding: "1rem",
  borderBottomLeftRadius: "1rem",
  borderBottomRightRadius: "1rem",
  fontSize: "14px",
  color: "rgb(29, 155, 240)",
  transition: "background-color 200ms",

  ":hover": {
    backgroundColor: "rgb(240, 240, 240)",
  },
  ":focus": {
    backgroundColor: "rgb(240, 240, 240)",
  },

  "& a": {
    textDecoration: "none",
  },

  "& a:visited": {
    color: "rgb(29, 155, 240)",
  },
};
