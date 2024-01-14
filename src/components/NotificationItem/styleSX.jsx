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
