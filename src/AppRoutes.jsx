import { Route, Routes, Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  SignUpForm,
  ForgotPasswordForm,
  RegistrationForm,
  PasswordFormModal,
  Container,
} from "@/components";
import { Registration, Home, Notifications, Post, Profile, Messages } from "@/pages";

export default function AppRoutes() {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  return (
    <Routes>
      <Route path="/" element={isAuthenticated ? <Outlet /> : <Navigate to="/login" />}>
        <Route index element={<Home />} />
        <Route path="/explore" element={<Container>Explore</Container>} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/lists" element={<Container>Lists</Container>} />
        <Route path="/communities" element={<Container>Communities</Container>} />
        <Route path="/verified" element={<Container>Verified</Container>} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/more" element={<Container>More</Container>} />
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
        <Route path="/bookmarks" element={<Container>Bookmarks</Container>} />
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
    </Routes>
  );
}
