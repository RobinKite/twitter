import { Route, Routes, Outlet, Navigate } from "react-router-dom";
import {
  Container,
  ForgotPasswordForm,
  PasswordFormModal,
  RegistrationFormModal,
} from "./components";
import { Registration, Home, Notifications, Post, Profile } from "./pages";
import { getTokens } from "./utils/tokens";
import { useSelector } from "react-redux";

export default function AppRoutes() {
  const hasToken = Boolean(getTokens().accessToken);
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  return (
    <Routes>
      <Route
        path="/"
        element={
          hasToken || isAuthenticated ? (
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
        <Route path="/profile" element={<Profile />} />
        <Route path="/post/:id" element={<Post />} />
        <Route
          path="/registration"
          element={
            <>
              <Registration />
              <RegistrationFormModal />
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
        <Route path="/bookmarks" element={<div>Bookmarks</div>} />
      </Route>
      <Route path="/forgotPasswordForm" element={<ForgotPasswordForm />}></Route>
      <Route
        path="/login"
        element={hasToken || isAuthenticated ? <Navigate to="/" /> : <Registration />}
      />
    </Routes>
  );
}
