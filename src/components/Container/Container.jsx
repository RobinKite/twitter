import PropTypes from "prop-types";
import { Main, Header, Sidebar } from "@/components";
import { ContainerSX } from "./styledSX";

export const Container = ({ withSidebar, children }) => {
  return (
    <ContainerSX>
      <Header />
      <Main>{children}</Main>
      {withSidebar && <Sidebar />}
    </ContainerSX>
  );
};

Container.propTypes = {
  withSidebar: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
};

Container.defaultProps = {
  withSidebar: true,
};
