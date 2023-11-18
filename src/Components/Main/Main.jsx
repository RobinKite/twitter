import classNames from "classnames";
import styles from "./Main.module.scss";
import AppRoutes from "../../AppRoutes";
const Main = ({ children }) => {
  return (
    <div className={classNames(styles.main)}>
      {/* <AppRoutes /> */}
      {children}
      {/* <h2>MAIN SECTION</h2>
      <AppRoutes/> */}
    </div>
  );
};

export default Main;
