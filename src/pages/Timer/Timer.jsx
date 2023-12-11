import { Outlet } from "react-router-dom";
import { getNotificationsCount } from "@/redux/slices/userSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

const Timer = ({ timeout }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Initial request
    dispatch(getNotificationsCount());
    const notificationsTimer = setInterval(
      () => dispatch(getNotificationsCount()),
      timeout,
    );
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
