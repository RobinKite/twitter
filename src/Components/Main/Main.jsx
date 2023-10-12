import classNames from "classnames";
import AppRoutes from "../../AppRoutes";
import styles from "./Main.module.scss";

const Main = () => {
  return (
    <div className={classNames(styles.main)}>
      <h2>MAIN SECTION</h2>
      <AppRoutes/>
    </div>
  );
};

export default Main;
