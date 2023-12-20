import { useDispatch, useSelector } from "react-redux";
import { LoginFormModal } from "@/components";
import { Themes, theme } from "@/themes/theme";
import AppRoutes from "./AppRoutes";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import { useEffect } from "react";
import { storage } from "./services";
import { setCurrentTheme } from "./redux/slices/appSlice";

export default function App() {
  const isLoginModalOpen = useSelector((state) => state.app.isLoginModalActive);
  const currentTheme = useSelector((state) => state.app.currentTheme) || Themes.LIGHT;
  const dispatch = useDispatch();

  useEffect(() => {
    if (!storage.theme) {
      storage.setTheme(Themes.LIGHT);
    }
    dispatch(setCurrentTheme(storage.theme));
  }, []);

  useEffect(() => {
    document.body.className = currentTheme;
  }, [currentTheme]);

  const dynamicTheme = createTheme({
    ...theme,
    palette: {
      ...theme.palette,
      mode: currentTheme,
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
