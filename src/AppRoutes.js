import React from "react";
import { Route, Routes } from "react-router-dom";
import PasswordForm from "./Components/LoginFormsModal/PasswordForm/PasswordForm";
import RegistrationForm from "./Components/RegistrationForm/RegistrationForm";
import ExitLogin from "./Pages/ExitLogin/ExitLogin";
function AppRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={<PasswordForm />} />
      {/* <Route exact path="/" element={<div>Home</div>} /> */}
      {/* <Route path="/explore" element={<RegistrationForm />} /> */}
      {/* <Route path="/explore" element={<div>Explore</div>} /> */}
      <Route path="/notifications" element={<div>Notifications</div>} />
      <Route path="/messages" element={<div>Messages</div>} />
      <Route path="/lists" element={<div>Lists</div>} />
      <Route path="/communities" element={<div>Communities</div>} />
      <Route path="/verified" element={<div>Verified</div>} />
      <Route path="/profile" element={<div>Profile</div>} />
      <Route path="/more" element={<div>More</div>} />
      <Route path="/LoginPage" element={<ExitLogin />} />
      <Route path="/registration" element={<RegistrationForm/>} />
    </Routes>
  );
}
export default AppRoutes;
