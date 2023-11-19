import classNames from "classnames";
import SearchBar from "../SearchBar/SearchBar";
import WhoToFollow from "../WhoToFollow/WhoToFollow";
import styles from "./RightSideBar.module.scss";

const RightSideBar = () => {
  return (
    <div className={classNames(styles.rightSideBar)}>
      <SearchBar />
      <WhoToFollow />
    </div>
  );
};

export default RightSideBar;
