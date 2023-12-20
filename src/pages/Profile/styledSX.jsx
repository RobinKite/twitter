import { styled, Button, Box } from "@mui/material";

export const HeaderPage = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  padding: "10px 20px 5px 20px",
}));

export const ContainerUserInfo = styled(Box)(() => ({
  padding: "60px 20px 25px 20px",
  position: "relative",
}));

export const ArrowSvg = styled(Box)(({ theme }) => ({
  // backgroundColor: "white",
  backgroundColor: theme.palette[theme.palette.mode].primary,
  borderRadius: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "40px",
  height: "40px",
  transition: "background-color 0.3s",
  "&:hover": {
    backgroundColor: theme.palette[theme.palette.mode].hover,
  },
}));

export const ContainerHederText = styled(Box)(({ theme }) => ({
  paddingLeft: "20px",
  color: theme.palette[theme.palette.mode].secondary,
  // color: "black",
}));

export const EditButton = styled(Button)(({ theme }) => ({
  position: "absolute",
  borderRadius: "50px",
  right: "20px",
  top: "20px",
  border: "1px solid rgb(239, 243, 244)",
  color: theme.palette[theme.palette.mode].secondary,
  // color: "black",
  " &:hover": {
    border: "1px solid rgb(207, 217, 222)",
    backgroundColor: theme.palette[theme.palette.mode].hover,
  },
}));
