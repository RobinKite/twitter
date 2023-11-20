import React, { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import BasicModal from "./Components/LoginFormsModal/LoginForm";
import AppRoutes from "./AppRoutes";
import { loginUser } from "./redux/slices/userSlice";

function App() {
  const isLoginModalOpen = useSelector((state) => state.app.isLoginModalActive);
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(loginUser("user2@gmail.com", "2222"));
  }, []);
  return (
    <div className="App">
      <AppRoutes />

      {isLoginModalOpen && <BasicModal open={isLoginModalOpen} />}
    </div>
  );
}

export default App;
