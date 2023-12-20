export const DialogContainerSX = {
  "& .css-1t1j96h-MuiPaper-root-MuiDialog-paper, .css-ybqyer-MuiPaper-root-MuiDialog-paper":
    {
      borderRadius: "16px",
      padding: "32px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
};

export const FormLabelsContainerSX = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  borderRadius: "16px",
  margin: "0 0 12px",
  padding: "4px 12px",
  backgroundColor: "#f7f9f9",
};

export const FormControlLabelSX = {
  position: "relative",
  margin: "4px",
  border: "1px solid rgb(66, 83, 100) ",
  borderRadius: "4px",
  padding: "0 20px",
  height: "60px",

  "& span": {
    fontSize: "15px",
    fontWeight: 700,
    color: "rgb(15,20,25)",
  },

  "&:focused": { border: "1px solid rgb(29, 150, 240)" },
};

export const checkIconSX = {
  position: "absolute",
  top: "50%",
  right: "50%",
  backgroundColor: " rgb(29, 150, 240)",
  borderRadius: "50%",
  padding: "2px",
  translate: "50% -50%",
};

export const FormGroupTitleSX = {
  margin: "0 0 4px",
  fontSize: "13px",
  fontWeight: 700,
  color: "rgb(83, 100, 113)",
};

export const DialogTitleSX = {
  marginBottom: "12px",
  padding: 0,
  fontSize: "23px",
  fontWeight: 800,
  color: "rgb(15, 20, 25)",
};

export const DialogContentSX = {
  padding: 0,
  color: "rgb(83, 100, 113)",
};

export const DialogContentTextSX = {
  marginBottom: "20px",
  textAlign: "center",
};

export const DialogArticleSX = {
  display: "grid",
  gridTemplateColumns: "40px 1fr",
  gap: "12px",

  margin: "0 32px 16px",
  border: "1px solid rgb(239, 243, 244)",
  borderRadius: "16px",
  padding: "12px 16px",

  fontSize: "15px",
  color: "rgb(83,100, 113)",
};

export const TwitterAvatarSX = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "50% ",
  width: "40px",
  height: "40px",
  background: "#000",
};
