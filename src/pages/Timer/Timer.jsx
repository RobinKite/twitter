import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { getNotificationsCount } from "@/redux/slices/userSlice";

export const Timer = ({ timeout }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNotificationsCount());
    const notificationsTimer = setInterval(
      () => dispatch(getNotificationsCount()),
      timeout,
    );
    return () => clearInterval(notificationsTimer);
  }, [dispatch, timeout]);
  return <Outlet />;
};

Timer.propTypes = {
  timeout: PropTypes.number,
};
Timer.defaultProps = {
  timeout: 30000,
};
