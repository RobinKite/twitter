import { Route, Routes, Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Registration, Home, Notifications, Post, Profile, Messages } from "@/pages";
import { Settings, Bookmarks } from "@/pages";
import { storage } from "@/services";

export default function AppRoutes() {
  // const hasToken = Boolean(getTokens().accessToken);
  const hasToken = Boolean(storage.accessToken);
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  return (
    <Routes>
      <Route
        path="/"
        element={isAuthenticated || hasToken ? <Outlet /> : <Navigate to="/login" />}>
        <Route index element={<Home />} />
        <Route path="notifications" element={<Notifications />} />
        <Route path="messages">
          <Route index element={<Messages />} />
          <Route path="settings" element={<Messages withSettings={true} />} />
          <Route path="*" element={<Navigate to="/messages" />} />
        </Route>
        <Route path="profile" element={<Profile />} />
        <Route path="post/:id" element={<Post />} />
        <Route path="bookmarks" element={<Bookmarks />} />
        <Route path="settings" element={<Settings />} />
      </Route>
      <Route
        path="/login"
        element={hasToken || isAuthenticated ? <Navigate to="/" /> : <Registration />}
      />
    </Routes>
  );
}
