import { Toolbar, Button, styled, Box } from "@mui/material";

export const ModalContainer = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: "600px",
  width: "100%",
  backgroundColor: theme.palette[theme.palette.mode].primary,

  border: "1px solid #000",
  boxShadow: "24px",
  padding: "0",
  borderRadius: "16px",
  height: "600px",
  overflow: "hidden",
}));

export const CustomButton = styled(Button)(({ theme }) => ({
  // backgroundColor: "black",
  // color: "white",
  backgroundColor: theme.palette[theme.palette.mode].secondary,
  color: theme.palette[theme.palette.mode].primary,
  borderRadius: "15px",
  "&:hover": {
    backgroundColor: theme.palette[theme.palette.mode].primary,
    color: theme.palette[theme.palette.mode].secondary,
  },
}));

export const ContainerDate = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  paddingTop: "20px",
}));

export const ModalContent = styled(Box)(() => ({
  height: "600px",
  overflow: "auto",
  padding: " 0",
}));

export const ModalHeader = styled(Toolbar)(({ theme }) => ({
  // backgroundColor: "rgb(255, 255, 255)",
  backgroundColor: theme.palette[theme.palette.mode].primary,
  position: "sticky",
  top: 0,
  zIndex: 1000,
  justifyContent: "space-between",
  padding: "0 15px",
}));
