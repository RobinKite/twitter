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
    dispatch(loginUser("user3@gmail.com", "3333"));
  }, [dispatch]);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <AppRoutes />
        {isLoginModalOpen && <LoginFormModal open={isLoginModalOpen} />}
      </ThemeProvider>
    </div>
  );
}
