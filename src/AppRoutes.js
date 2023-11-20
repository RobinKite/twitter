// AppRoutes.js
import React from "react";
import { Route, Routes, Outlet, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Profile from "./Pages/Profile/index.jsx";
import ExitLogin from "./Pages/ExitLogin/ExitLogin.jsx";
import Container from "./Components/Container/Container.jsx";
import Home from "./Pages/Home/Home.jsx";
import PostPages from "./Pages/Post/PostPages.jsx";
import PasswordForm from "./Components/LoginFormsModal/PasswordForm/PasswordForm";
import RegistrationForm from "./Components/RegistrationForm/RegistrationForm";
import ForgotPasswordForm from "./Components/ForgotPasswordForm/ForgotPasswordForm.jsx";
import SignUpForm from "./Components/SignUpForm/SignUpForm.jsx";
import Main from "./Components/Main/Main.jsx";
import Notifications from "./Pages/Notifications/Notifications";

function AppRoutes() {
  // const isLog = useSelector((state) => state.registration.isLog);
  const isLog = true;
  return (
    <Routes>
      <Route
        path="/"
        element={
          isLog ? (
            <Container>
              <Outlet />
            </Container>
          ) : (
            <Navigate to="/login" />
          )
        }>
        <Route index element={<Home />} />
        <Route path="/explore" element={<div>Explore</div>} />

        <Route path="/notifications" element={<Notifications />} />
        <Route path="/messages" element={<div>Messages</div>} />
        <Route path="/lists" element={<div>Lists</div>} />
        <Route path="/communities" element={<div>Communities</div>} />
        <Route path="/verified" element={<div>Verified</div>} />
        <Route
          path="/profile"
          element={
            <div>
              <Profile />
            </div>
          }
        />
        <Route path="/more" element={<div>More</div>} />
        <Route path="/inshyy-post/:id" element={<PostPages />} />

        <Route
          path="/registration"
          element={
            <>
              <ExitLogin />
              <RegistrationForm />
            </>
          }
        />
        <Route
          path="/passwordForm"
          element={
            <>
              <ExitLogin />
              <PasswordForm />
            </>
          }
        />

        <Route path="/bookmarks" element={<div>Bookmarks</div>} />
      </Route>
      <Route
        path="/signUpForm"
        element={
          <>
            <ExitLogin />
            <SignUpForm />
          </>
        }></Route>
      <Route path="/forgotPasswordForm" element={<ForgotPasswordForm />}></Route>
      <Route path="/login" element={isLog ? <Navigate to="/" /> : <ExitLogin />} />
    </Routes>
  );
}

export default AppRoutes;
