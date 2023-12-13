import { useSelector } from "react-redux";
import { LoginFormModal } from "@/components";
import { theme, Themes } from "@/themes/theme";
import AppRoutes from "./AppRoutes";
import { useState } from "react";
import { ThemeProvider, createTheme, CssBaseline, Button } from "@mui/material";

export default function App() {
  const isLoginModalOpen = useSelector((state) => state.app.isLoginModalActive);
  const [currentMode, setCurrentMode] = useState(Themes.LIGHT);

  const toggleThemeMode = () => {
    setCurrentMode((prevMode) =>
      prevMode === Themes.LIGHT ? Themes.DARK : Themes.LIGHT,
    );
  };

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
      <Button onClick={toggleThemeMode}>Toggle Theme</Button>
    </ThemeProvider>
  );
}
