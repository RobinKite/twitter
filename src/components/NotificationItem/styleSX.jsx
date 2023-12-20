import { Themes } from "@/themes/theme";
import { Stack, styled } from "@mui/material";

export const ContainerSX = styled(Stack)(({ theme }) => ({
  padding: "12px 16px",
  color:
    theme.palette.mode === Themes.LIGHT
      ? theme.palette.common.secondary
      : theme.palette.dark.light_grey,

  fontSize: "15px",
  borderBottomColor:
    theme.palette.mode === Themes.LIGHT
      ? theme.palette.light.search_light
      : theme.palette.dark.border_grey,
  borderBottomStyle: "solid",
  borderBottomWidth: "1px",
  cursor: "pointer",
  gap: "12px",
  "&:hover": {
    backgroundColor: "#00000006",
  },
}));
// export const ModalBody = styled(Box)(({ theme }) => ({
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   maxWidth: "600px",
//   width: "100%",
//   // minHeight: "30em",
//   maxHeight: "40em",
//   overflowY: "auto",
//   overflowX: "hidden",
//   // backgroundColor: "white",
//   backgroundColor: theme.palette[theme.palette.mode].primary,
//   display: "flex",
//   justifyContent: "flex-start",
//   flexDirection: "column",
//   textAlign: "center",
//   borderRadius: 24,
//   paddingLeft: 16,
//   paddingRight: 16,

//   "@media(max-width: 700px)": {
//     minWidth: "100%",
//     minHeight: "100%",
//   },
// // }));
