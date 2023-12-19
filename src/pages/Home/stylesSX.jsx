export const homeHeaderSX = {
  position: "relative",
  padding: "16px 0",
  fontSize: "15px",
  fontWeight: 700,
  lineHeight: 1.33,
  textAlign: "center",
  color: "rgb(15, 20, 25)",

  "&::after": {
    content: '""',
    position: "absolute",
    top: "48px",
    display: "block",
    height: "4px",
    width: "100%",
    borderRadius: "2px",
    backgroundColor: "rgb(29, 150, 240)",
  },
};
