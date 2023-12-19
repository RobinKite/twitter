import { styled, Button, Box, Typography } from "@mui/material";

export const HeaderPage = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  padding: "10px 0 5px 20px",
}));

export const ContainerUserInfo = styled(Box)(() => ({
  padding: "40px 20px 25px 20px",
}));

export const ArrowSvg = styled(Box)(() => ({
  backgroundColor: "white",
  borderRadius: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "40px",
  height: "40px",
  transition: "background-color 0.3s",
  "&:hover": {
    backgroundColor: "rgb(133, 125, 125)",
  },
}));

export const ContainerHederText = styled(Box)(() => ({
  paddingLeft: "20px",
  color: "black",
}));

export const EditButton = styled(Button)(() => ({
  display: "flex",
  marginLeft: "auto",
  borderRadius: "50px",
  border: "1px solid rgb(239, 243, 244)",
  color: "black",

  "&:hover": {
    border: "1px solid rgb(207, 217, 222)",
    background: " rgb(239, 243, 244)",
  },
}));
export const BoxInfo = styled(Box)(() => ({
  display: "flex",
  gap: 20,
  color: "rgb(83, 100, 113)",
  marginBottom: 10,
}));
export const TypographyInfo = styled(Typography)(() => ({
  display: "flex",
  fontSize: "15px",
}));
