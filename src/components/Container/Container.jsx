import PropTypes from "prop-types";
import { Main, Header, Sidebar } from "@/components";
import styles from "./Container.module.scss";

export const Container = ({ withSidebar, children }) => {
  return (
    <div className={styles.container}>
      <Header />
      <Main>{children}</Main>
      {withSidebar && <Sidebar />}
    </div>
  );
};

Container.propTypes = {
  withSidebar: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
};

Container.defaultProps = {
  withSidebar: true,
};
