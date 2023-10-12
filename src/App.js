import React from "react";
import "./App.css";
// import Sidebar from './Components/Sidebar/Sidebar';
import AppRoutes from "./AppRoutes";
import { useSelector, useDispatch } from "react-redux";
import LoginForm from "./Components/LoginFormsModal/LoginForm";
import BasicModal from "./Components/LoginFormsModal/LoginForm";
import Container from "./Components/Container/Container";
import Main from "./Components/Main/Main";

function App() {
  const dispatch = useDispatch();
  const firstModalOpen = useSelector((state) => state.loginModal.isActive);
  // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);
  return (
    <div className="App">
      <Container />
      {/* <Sidebar /> */}
      {/* <AppRoutes /> */}
      {/* <Main/> */}
      {firstModalOpen && <BasicModal open={firstModalOpen} />}
    </div>
  );
}

export default App;
