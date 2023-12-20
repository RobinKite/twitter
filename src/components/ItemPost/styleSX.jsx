export const tweetWrapperSX = {
  borderBottom: "1px solid rgb(239, 243, 244)",
  paddingTop: "12px",
  paddingBottom: "12px",
  paddingLeft: "16px",
  paddingRight: "16px",
  cursor: "pointer",
  position: "relative",
  transition: "background-color 300ms linear",

  "&:hover": {
    backgroundColor: "rgba(0,0,0,0.03)",
  },
  "&:focus": {
    backgroundColor: "rgba(0,0,0,0.03)",
  },
};

export const tweetAdditionalInfoSX = {
  display: "inline-flex",
  flexDirection: "row",
  marginBottom: "2px",
  alignItems: "center",
  fontSize: "13px",
  fontWeight: "700",
  color: "rgb(83, 100, 113)",
  marginLeft: "1.25rem",

  "& span": {
    marginLeft: "16px",
    fontSize: "13px",
    fontWeight: "700",
    color: "rgb(83, 100, 113)",
  },

  "&:hover": {
    cursor: "pointer",
    textDecoration: "underline",
  },
};

export const tweetSX = {
  display: "grid",
  gridTemplateColumns: "40px 1fr",
  gap: "12px",
};

export const avatarSX = {
  position: "static",
  margin: 0,
  bgcolor: "rgb(8, 139, 226)",
  width: 40,
  height: 40,
};

export const tweetHeaderSX = {
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  justifyContent: "space-between",
};

export const tweetUsernameSX = {
  marginBottom: "2px",
  color: "rgb(15, 20, 25)",
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
  color: "rgb(83, 100, 113)",
};

export const iconDeleteSX = {
  position: "absolute",
  top: "0.25rem",
  right: "0.375rem",
};

export const tweetContentSX = {
  marginBottom: "12px",
  color: "rgb(15, 20, 25)",
  fontSize: "15px",
  lineHeight: 1.333,
  overflowWrap: "anywhere",
  textAlign: "left",
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
  color: "rgb(83, 100, 113)",
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
  color: "rgb(83, 100, 113)",
  "&:hover": {
    color: "rgb(249, 24, 128)",
    "& svg": {
      fill: "rgb(249, 24, 128)",
    },
  },
};
