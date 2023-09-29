import classNames from "classnames";
import Sidebar from "../Sidebar/Sidebar";
import Main from "../Main/Main";
import RightSideBar from "../RightSideBar/RightSideBar";
import styles from "./Container.module.scss";

const Container = () => {
  return (
    <div className={classNames(styles.container)}>
      <Sidebar />
      <Main />
      <RightSideBar />
    </div>
  );
};

export default Container;
