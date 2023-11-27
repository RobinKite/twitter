import { NavLink, useLocation } from "react-router-dom/dist";
import PropTypes from "prop-types";
import { headerItems } from "@/constants/navigation";

const HeaderMobileItem = ({ path, getIconComponent }) => {
  const location = useLocation();
  const isActive = location.pathname === path;
  const Icon = getIconComponent(isActive);
  return (
    <li>
      <NavLink to={path}>
        <Icon size={30} />
      </NavLink>
    </li>
  );
};

HeaderMobileItem.propTypes = {
  path: PropTypes.string.isRequired,
  getIconComponent: PropTypes.func.isRequired,
};

const HeaderMobile = () => {
  return (
    <nav style={{ position: "fixed", left: "0px", right: "0px" }}>
      <ul
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "0px, 15px",
        }}>
        {headerItems.map((item) => {
          return <HeaderMobileItem key={item.name} {...item} />;
        })}
      </ul>
    </nav>
  );
};
export default HeaderMobile;
