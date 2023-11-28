import { ThemeProvider } from "@mui/material/styles";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LoginFormModal } from "@/components";
import { theme } from "@/themes/theme";
import { loginUser } from "@/redux/slices/userSlice";
import AppRoutes from "@/AppRoutes";

export default function App() {
  const dispatch = useDispatch();
  const isLoginModalOpen = useSelector((state) => state.app.isLoginModalActive);

  useEffect(() => {
    dispatch(loginUser("user2@gmail.com", "2222"));
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <AppRoutes />
      {isLoginModalOpen && <LoginFormModal open={isLoginModalOpen} />}
    </ThemeProvider>
  );
}
