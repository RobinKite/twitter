import { styled, Button, Box, Typography } from "@mui/material";

export const HeaderPage = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  padding: "10px 0 5px 20px",
}));

export const ContainerUserInfo = styled(Box)(() => ({
  padding: "40px 20px 25px 20px",
}));

export const ArrowSvg = styled(Box)(({ theme }) => ({
  fill: theme.palette[theme.palette.mode].secondary,
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

export const EditButton = styled(Button)(({ theme }) => ({
  // position: "absolute",
  display: "flex",
  marginLeft: "auto",
  borderRadius: "50px",
  // border: "1px solid rgb(239, 243, 244)",
  borderStyle: "solid",
  borderWidth: "1px",
  borderColor:
    theme.palette.mode === "light"
      ? theme.palette.light.banner
      : theme.palette.common.primary,
  color:
    theme.palette.mode === "light"
      ? theme.palette.common.secondary
      : theme.palette.dark.light_grey,

  backgroundColor: theme.palette[theme.palette.mode].primary,

  " &:hover": {
    borderStyle: "solid",
    borderWidth: "1px",
    borderColor:
      theme.palette.mode === "light"
        ? theme.palette.light.banner
        : theme.palette.common.primary,
    background:
      theme.palette.mode === "light"
        ? theme.palette.light.banner
        : theme.palette.dark.hover,
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
