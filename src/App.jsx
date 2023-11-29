import { ThemeProvider } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { LoginFormModal } from "@/components";
import { theme } from "@/themes/theme";
import AppRoutes from "./AppRoutes";

export default function App() {
  const isLoginModalOpen = useSelector((state) => state.app.isLoginModalActive);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <AppRoutes />
        {isLoginModalOpen && <LoginFormModal open={isLoginModalOpen} />}
      </ThemeProvider>
    </div>
  );
}
