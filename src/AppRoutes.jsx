import { Route, Routes, Outlet, Navigate } from "react-router-dom";
import {
  Container,
  SignUpForm,
  ForgotPasswordForm,
  RegistrationForm,
  PasswordFormModal,
} from "./components";
import { Registration, Home, Notifications, Post, Profile } from "./pages";
import { useSelector } from "react-redux";
import Bookmarks from "./pages/Bookmarks/Bookmarks";

export default function AppRoutes() {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  return (
    <Routes>
      <Route
        path="/"
        element={
          isAuthenticated ? (
            <Container>
              <Outlet />
            </Container>
          ) : (
            <Navigate to="/login" />
          )
        }>
        <Route index element={<Home />} />

        <Route path="/notifications" element={<Notifications />} />
        <Route path="/messages" element={<div>Messages</div>} />
        <Route
          path="/profile"
          element={
            <div>
              <Profile />
            </div>
          }
        />
        <Route path="/more" element={<div>More</div>} />
        <Route path="/post/:id" element={<Post />} />

        <Route
          path="/registration"
          element={
            <>
              <Registration />
              <RegistrationForm />
            </>
          }
        />
        <Route
          path="/passwordForm"
          element={
            <>
              <Registration />
              <PasswordFormModal />
            </>
          }
        />

        <Route path="/bookmarks" element={<Bookmarks />} />
      </Route>
      <Route
        path="/signUpForm"
        element={
          <>
            <Registration />
            <SignUpForm />
          </>
        }></Route>
      <Route path="/forgotPasswordForm" element={<ForgotPasswordForm />}></Route>
      <Route
        path="/login"
        element={isAuthenticated ? <Navigate to="/" /> : <Registration />}
      />
      <Route path="/settings" element={<div>Settings</div>} />
    </Routes>
  );
}
