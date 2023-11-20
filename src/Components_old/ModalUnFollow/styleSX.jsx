import { Paper, Button } from "@mui/material/";
import { styled } from "@mui/material/styles";

export const ModalContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "90vh",
});

export const ModalContent = styled(Paper)({
  padding: "16px",
  width: 300,
  height: 300,
  borderRadius: 20,
});

export const ButtonContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  marginTop: 30,
});

export const ButtonUnfollow = styled(Button)({
  color: "rgb(255 255 555)",
  backgroundColor: "rgb(0, 0, 0)",
  textTransform: "capitalize",
  borderRadius: 25,
  minWidth: 280,
  margin: "0 auto",
  padding: 10,
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: "rgb(0, 0, 0, 0.85)",
  },
});

export const ButtonCancell = styled(Button)({
  backgroundColor: "rgb(255 255 555)",
  color: "rgb(0, 0, 0)",
  margin: "0 auto",
  marginTop: 20,
  textTransform: "capitalize",
  borderRadius: 25,
  minWidth: 280,
  padding: 10,
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: "rgb(248, 248, 248)",
  },
});
