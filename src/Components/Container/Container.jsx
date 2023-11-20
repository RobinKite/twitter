import { Outlet } from "react-router-dom";
import { Main, Header, Sidebar } from "../../components";
import styles from "./Container.module.scss";

export const Container = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Sidebar />
    </div>
  );
};
