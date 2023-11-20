import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LoginFormModal } from "./components";
import { loginUser } from "./redux/slices/userSlice";
import AppRoutes from "./AppRoutes";

export default function App() {
  const dispatch = useDispatch();
  const isLoginModalOpen = useSelector((state) => state.app.isLoginModalActive);

  useEffect(() => {
    dispatch(loginUser("user2@gmail.com", "2222"));
  }, []);

  return (
    <div>
      <AppRoutes />
      {isLoginModalOpen && <LoginFormModal open={isLoginModalOpen} />}
    </div>
  );
}
