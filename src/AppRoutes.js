// AppRoutes.js
import React from "react";
import { Route, Routes, Outlet, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Profile from "./Pages/Profile/index.jsx";
import ExitLogin from "./Pages/ExitLogin/ExitLogin";
import Container from "./Components/Container/Container.jsx";
import Home from "./Pages/Home/Home.jsx";
import PostPages from "./Pages/Post/PostPages.jsx";

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
        }
      >
        <Route index element={<Home/>} />
        <Route path="/explore" element={<div>Explore</div>} />
        <Route path="/notifications" element={<div>Notifications</div>} />
        <Route path="/messages" element={<div>Messages</div>} />
        <Route path="/lists" element={<div>Lists</div>} />
        <Route path="/communities" element={<div>Communities</div>} />
        <Route path="/verified" element={<div>Verified</div>} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/more" element={<div>More</div>} />
        <Route path="/inshyy-post/:id" element={<PostPages/>} />
      </Route>
      <Route
        path="/login"
        element={isLog ? <Navigate to="/" /> : <ExitLogin />}
      />
    </Routes>
  );
}

export default AppRoutes;
