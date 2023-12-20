import { Outlet } from "react-router-dom";
import useWebSockets from "@/hooks/useWebSockets";

export const Sockets = () => {
  useWebSockets("topic/notifications");
  useWebSockets("topic/messages");
  return <Outlet />;
};
1;
