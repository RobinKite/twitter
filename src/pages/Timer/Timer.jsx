import { Outlet } from "react-router-dom";
import { getNotifications } from "@/redux/slices/userSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

const Timer = ({ timeout }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Initial request
    dispatch(getNotifications());
    const notificationsTimer = setInterval(() => dispatch(getNotifications()), timeout);
    return () => clearInterval(notificationsTimer);
  }, [dispatch, timeout]);
  return <Outlet />;
};

export default Timer;

Timer.propTypes = {
  timeout: PropTypes.number,
};
Timer.defaultProps = {
  timeout: 30000,
};
