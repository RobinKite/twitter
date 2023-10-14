import classNames from "classnames";
import Sidebar from "../Sidebar/Sidebar";
import Main from "../Main/Main";
import RightSideBar from "../RightSideBar/RightSideBar";
import styles from "./Container.module.scss";
import { Outlet } from "react-router-dom";

const Container = () => {
  return (
    <div className={classNames(styles.container)}>
      <Sidebar />
      <Main>
        <Outlet />
      </Main>
      <RightSideBar />
    </div>
  );
};

export default Container;
