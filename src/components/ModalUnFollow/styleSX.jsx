import { Button } from "@mui/material/";
import { styled } from "@mui/material/styles";

export const ModalContainerSX = {
  backgroundColor: "transparent",
  "& .css-1t1j96h-MuiPaper-root-MuiDialog-paper": {
    borderRadius: "20px",
    bgcolor: "inherit",
    overflow: "hidden",
  },
};

export const ModalContent = {
  overflow: "hidden",
  padding: "32px",
  width: "320px",
  minHeight: "300px",
  backgroundColor: "rgba(255, 255, 255, 1.0)",
};

export const ButtonContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  marginTop: "30px",
});

const ButtonSX = {
  textTransform: "capitalize",
  borderRadius: "25px",
  minWidth: "256px",
  minHeight: "44px",
  marginRight: "auto",
  marginLeft: "auto",
  fontWeight: "bold",
  boxShadow: "none",
};

export const ButtonUnfollow = styled(Button)({
  ...ButtonSX,
  color: "rgb(255 255 555)",
  backgroundColor: "rgb(0, 0, 0)",

  "&:hover": {
    backgroundColor: "rgb(0, 0, 0, 0.85)",
    boxShadow: "none",
  },

  "&:focus": {
    backgroundColor: "rgb(0, 0, 0, 0.85)",
    boxShadow: "none",
  },
});

export const ButtonCancell = styled(Button)({
  ...ButtonSX,
  backgroundColor: "rgb(255 255 555)",
  color: "rgb(0, 0, 0)",
  marginTop: "10px",
  border: "1px solid rgb(207, 217, 222)",

  "&:hover": {
    backgroundColor: "rgb(248, 248, 248)",
    boxShadow: "none",
  },

  "&:focus": {
    backgroundColor: "rgb(248, 248, 248)",
    boxShadow: "none",
  },
});
