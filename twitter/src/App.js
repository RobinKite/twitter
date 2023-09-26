import "./App.css";
import AppRoutes from "./AppRoutes";
import { useSelector, useDispatch } from "react-redux";
import LoginForm from "./Components/LoginFormsModal/LoginForm";
import BasicModal from "./Components/LoginFormsModal/LoginForm";
import React from "react";
function App() {
  const dispatch = useDispatch();
  const firstModalOpen = useSelector((state) => state.loginModal.isActive);
  // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  return <div className="App">

<AppRoutes />
      {firstModalOpen && (
        <BasicModal   open={firstModalOpen}/>
      )}
  </div>;
}

export default App;
