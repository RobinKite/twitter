export const changePasswordModalContainerSX = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  maxWidth: "500px",
  margin: "0 auto",
};

export const changePasswordModalSX = {
  backgroundColor: "white",
  minWidth: "400px",
  margin: "0 auto",
  borderRadius: "10px",
};

export const modalTitleSX = {
  marginLeft: "24px",
  marginTop: "25px",
  marginBottom: "15px",
  fontWeight: "700",
};

export const inputFieldSX = {
  maxWidth: "350px",
  margin: "0 auto",
  marginTop: "15px",
  marginBottom: "15px",
};

export const btnContainer = {
  display: "flex",
  flexDirection: "row",
  marginTop: "15px",
  marginBottom: "25px",
};

export const btnChangeSX = {
  maxWidth: "100px",
  minWidth: "100px",
  margin: "0 auto",
  // marginTop: "10px",
  // marginBottom: "20px",
  border: "1px solid rgb(0, 0, 0, 0.8)",
  transition: "background-color 250ms linear, color 250ms linear",
  boxShadow: "none",
  color: "rgb(255,255,255)",
  backgroundColor: "rgb(0, 0, 0)",
  ":hover": {
    backgroundColor: "rgb(0, 0, 0, 0.8)",
    border: "1px solid rgb(0, 0, 0, 0.8)",
    boxShadow: "none",
  },
};

export const btnCancellSX = {
  maxWidth: "100px",
  minWidth: "100px",
  margin: "0 auto",
  // marginTop: "10px",
  // marginBottom: "20px",
  border: "1px solid rgb(210, 210, 210)",
  transition: "background-color 250ms linear, color 250ms linear",
  boxShadow: "none",
  color: "rgb(0, 0, 0)",
  backgroundColor: "rgb(255,255,255)",
  ":hover": {
    backgroundColor: "rgb(250, 250, 250)",
    border: "1px solid rgb(210, 210, 210)",
    boxShadow: "none",
  },
};
