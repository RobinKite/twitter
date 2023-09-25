import "./App.css";
import AppRoutes from "./AppRoutes";
import { useSelector, useDispatch } from "react-redux";
import LoginForm from "./Components/LoginFormsModal/LoginForm";
function App() {
  const dispatch = useDispatch();
  const firstModalOpen = useSelector((state) => state.loginModal.isActive);
  return <div className="App">

<AppRoutes />
      {firstModalOpen && (
        <LoginForm  active={firstModalOpen} />
      )}
  </div>;
}

export default App;
