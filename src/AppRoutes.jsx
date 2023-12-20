import { Route, Routes, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Registration, Home, Notifications, Post, Profile, Messages } from "@/pages";
import { CurrentUser, Settings, Bookmarks, Timer } from "@/pages";
import { Loader } from "@/components";
import { storage } from "@/services";
import { fetchUser } from "@/redux/slices/userSlice";
import { setIsLoading } from "@/redux/slices/appSlice";

export default function AppRoutes() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const isAuthenticated = Object.keys(user).length !== 0;
  const isLoading = useSelector((state) => state.app.isLoading);

  useEffect(() => {
    const value = !!storage.accessToken;
    dispatch(setIsLoading(value));
    if (storage.accessToken || storage.refreshToken) dispatch(fetchUser());
  }, [dispatch]);

  if (isLoading) return <Loader />;

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
          <Route path=":id" element={<Messages />} />
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
