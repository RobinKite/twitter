import { useSelector } from "react-redux";
import { LoginFormModal } from "@/components";
import { theme } from "@/themes/theme";
import AppRoutes from "./AppRoutes";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";

export default function App() {
  const isLoginModalOpen = useSelector((state) => state.app.isLoginModalActive);
  const currentMode = useSelector((state) => state.app.currentMode);
  const dynamicTheme = createTheme({
    ...theme,
    palette: {
      ...theme.palette,
      mode: currentMode,
    },
  });

  return (
    <ThemeProvider theme={dynamicTheme}>
      <CssBaseline />
      <AppRoutes />
      {isLoginModalOpen && <LoginFormModal open={isLoginModalOpen} />}
    </ThemeProvider>
  );
}
