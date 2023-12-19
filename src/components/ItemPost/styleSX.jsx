export const tweetWrapperSX = {};

export const tweetSX = {
  borderBottomColor: (theme) =>
    theme.palette.mode === "light"
      ? theme.palette.light.search_light
      : theme.palette.dark.border_grey,
  borderBottomStyle: "solid",
  borderBottomWidth: "1px",
  paddingTop: "12px",
  paddingBottom: "12px",
  paddingLeft: "16px",
  paddingRight: "16px",
  display: "grid",
  gridTemplateColumns: "40px 1fr",
  gap: "12px",
  cursor: "pointer",
  transition: "background-color 300ms linear",

  "&:hover": {
    backgroundColor: "rgba(0,0,0,0.03)",
  },
  "&:focus": {
    backgroundColor: "rgba(0,0,0,0.03)",
  },
};

export const avatarSX = {
  position: "static",
  margin: 0,
  // bgcolor: "rgb(8, 139, 226)",

  width: 40,
  height: 40,
};

export const tweetHeaderSX = {
  position: "relative",
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  justifyContent: "space-between",
};

export const tweetUsernameSX = {
  marginBottom: "2px",
  // color: "rgb(15, 20, 25)",
  color: (theme) =>
    theme.palette.mode === "light"
      ? theme.palette.common.secondary
      : theme.palette.dark.light_grey,
  fontSize: "15px",
  fontWeight: 700,
  lineHeight: 1.333,

  "&:hover": {
    textDecoration: "underline",
  },
};

export const tweetUsertagSX = {
  marginBottom: "2px",
  fontSize: "15px",

  color: (theme) =>
    theme.palette.mode === "light"
      ? theme.palette.common.primary
      : theme.palette.dark.text_grey,
};

export const iconDeleteSX = {
  position: "absolute",
  top: "-2px",
  right: "6px",
};

export const tweetContentSX = {
  marginBottom: "12px",
  // color: "rgb(15, 20, 25)",
  color: (theme) =>
    theme.palette.mode === "light"
      ? theme.palette.common.secondary
      : theme.palette.dark.light_grey,
  fontSize: "15px",
  lineHeight: 1.333,
};

export const tweetImgSX = {
  borderRadius: "15px",
  overflow: "hidden",
  display: "grid",
  gap: "2px",

  "& img": {
    borderRadius: "15px",
    maxWidth: "100%",
    objectFit: "cover",
  },
};

export const tweetImgEvenSX = {
  gridTemplateColumns: "1fr 1fr",
  border: "1px solid rgb(207,217,222)",
  ...tweetImgSX,

  "& img": {
    maxWidth: "100%",
    minHeight: "100%",
    objectFit: "cover",
  },
};

export const tweetImgOddSX = {
  gridTemplateColumns: "repeat(3, 1fr)",
  border: "1px solid rgb(207,217,222)",
  ...tweetImgSX,

  "& img": {
    maxWidth: "100%",
    minHeight: "100%",
    objectFit: "cover",
  },
};

export const tweetActionsSX = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  marginTop: "12px",
};

export const iconSX = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  width: "34px",
  height: "34px",
};

export const replyCountSX = {
  ...iconSX,
  transition: "background-color 300ms linear, color 300ms linear",
  // color: "rgb(83, 100, 113)",
  color: (theme) => theme.palette.common.primary,
  fontSize: "15px",

  "&:hover": {
    color: "hsl(201, 79%, 48%)",
  },
  "&:hover svg": {
    fill: "hsl(201, 79%, 48%)",
  },
};

export const tweetRepostSX = {
  ...iconSX,
  transition: "background-color 300ms linear, color 300ms linear",
  "&:hover": {
    color: "hsl(134, 66%, 57%)",
  },
  "&:hover svg": {
    fill: "hsl(134, 66%, 57%)",
  },
};

export const likeCountSX = {
  ...iconSX,
  transition: "background-color 300ms linear, color 300ms linear",
  fontSize: "15px",
  // color: "rgb(83, 100, 113)",
  color: (theme) => theme.palette.common.primary,
  "&:hover": {
    color: "rgb(249, 24, 128)",
    "& svg": {
      fill: "rgb(249, 24, 128)",
    },
  },
};
