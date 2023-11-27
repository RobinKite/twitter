import { NavLink, useLocation } from "react-router-dom/dist";
import PropTypes from "prop-types";
import { footerItems } from "@/constants/navigation";

const FooterMobileItem = ({ path, getIconComponent }) => {
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

FooterMobileItem.propTypes = {
  path: PropTypes.string.isRequired,
  getIconComponent: PropTypes.func.isRequired,
};

const FooterMobile = () => {
  return (
    <nav style={{ position: "fixed", left: "0px", right: "0px", bottom: "0px" }}>
      <ul style={{ display: "flex", justifyContent: "space-between" }}>
        {footerItems.map((item) => {
          return <FooterMobileItem key={item.name} {...item} />;
        })}
      </ul>
    </nav>
  );
};

export default FooterMobile;
