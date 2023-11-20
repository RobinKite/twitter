import { Route, Routes, Outlet, Navigate } from "react-router-dom";
import {
  Container,
  SignUpForm,
  ForgotPasswordForm,
  RegistrationForm,
  PasswordFormModal,
} from "./components";
import { Registration, Home, Notifications, Post, Profile } from "./pages";

export default function AppRoutes() {
  const isAuthorized = true;
  return (
    <Routes>
      <Route
        path="/"
        element={
          isAuthorized ? (
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
        <Route path="/inshyy-post/:id" element={<Post />} />

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

        <Route path="/bookmarks" element={<div>Bookmarks</div>} />
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
        element={isAuthorized ? <Navigate to="/" /> : <Registration />}
      />
    </Routes>
  );
}
