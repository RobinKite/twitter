import React from "react";
import { Route, Routes } from "react-router-dom";
import ItemPost from '../src/Components/ItemPost/ItemPost'
function AppRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={<div>Home</div>} />
      <Route path="/explore" element={<div>Explore</div>} />
      <Route path="/notifications" element={<div>Notifications</div>} />
      <Route path="/messages" element={<div>Messages</div>} />
      <Route path="/lists" element={<div>Lists</div>} />
      <Route path="/communities" element={<div>Communities</div>} />
      <Route path="/verified" element={<div>Verified</div>} />
      <Route path="/profile" element={<ItemPost/>} />
      <Route path="/more" element={<div>More</div>} />
    </Routes>
  );
}
export default AppRoutes;
