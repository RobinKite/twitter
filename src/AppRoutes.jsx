import { Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Registration, Home, Notifications, Post, Profile, Messages } from "@/pages";
import { Settings, Bookmarks } from "@/pages";
import { CurrentUser } from "./pages/СurrentUser/CurrentUser";
import Timer from "./pages/Timer/Timer";

export default function AppRoutes() {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  if (!isAuthenticated) {
    return (
      <Routes>
        <Route path="/login" element={<Registration />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    );
  }
  return (
    <Routes>
      <Route path="/" element={<Timer />}>
        <Route index element={<Home />} />
        <Route path="notifications" element={<Notifications />} />
        <Route path="messages">
          <Route index element={<Messages />} />
          <Route path="settings" element={<Messages withSettings={true} />} />
          <Route path="*" element={<Navigate to="/messages" />} />
        </Route>
        <Route path="profile" element={<Profile />} />
        <Route path="user/:id" element={<CurrentUser />} />
        <Route path="post/:id" element={<Post />} />
        <Route path="bookmarks" element={<Bookmarks />} />
        <Route path="settings" element={<Settings />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
}
