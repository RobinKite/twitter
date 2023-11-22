export const containerSX = {
  backgroundColor: "rgb(248, 248, 248)",
  borderRadius: "20px",
  maxWidth: "100%",
};

export const titleSX = {
  fontSize: "20px",
  paddingLeft: "20px",
  paddingRight: "16px",
  paddingTop: "16px",
  paddingBottom: "12px",
  fontWeight: "bold",
};

export const showMoreSX = {
  padding: "15px 18px ",
  borderBottomLeftRadius: "25px",
  borderBottomRightRadius: "25px",
  fontSize: "14px",
  color: "rgb(29, 155, 240)",
  transition: "0.25s",

  "&:hover": {
    cursor: "pointer",
    backgroundColor: "rgb(240, 240, 240)",
  },

  "&:focus": {
    cursor: "pointer",
    backgroundColor: "rgb(240, 240, 240)",
  },

  "& a": {
    textDecoration: "none",
  },

  "& a:visited": {
    color: "rgb(29, 155, 240)",
  },
};
