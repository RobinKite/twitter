import React from "react";
import { Route, Routes } from "react-router-dom";
import ExitLogin from "./Pages/ExitLogin/ExitLogin";
import LoginForm from "./Components/LoginFormsModal/LoginForm"
const AppRoutes = () => {
    return (
      <Routes>
        <Route path="/" element={<ExitLogin />} />
        {/* <Route path="/" element={<LoginForm />} /> */}
       
      </Routes>
    );
  };
  export default AppRoutes;