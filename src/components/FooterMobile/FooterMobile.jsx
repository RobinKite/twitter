import { NavLink, useLocation } from "react-router-dom/dist";
import PropTypes from "prop-types";
import { footerItems } from "@/constants/navigation";
import { useEffect, useState } from "react";

const FooterMobileItem = ({ path, getIconComponent }) => {
  const location = useLocation();
  const isActive = location.pathname === path;
  const Icon = getIconComponent(isActive);

  return (
    <li style={{ padding: "10px" }}>
      <NavLink to={path}>
        <Icon size={26.25} />
      </NavLink>
    </li>
  );
};

FooterMobileItem.propTypes = {
  path: PropTypes.string.isRequired,
  getIconComponent: PropTypes.func.isRequired,
};

const FooterMobile = () => {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setIsAtTop(scrollTop === 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        zIndex: 10,
        left: 0,
        right: 0,
        bottom: 0,
      }}>
      <ul
        style={{
          display: "flex",
          justifyContent: "space-around",
          opacity: isAtTop ? 1 : 0.5,
          transition: "opacity 0.25s linear",
        }}>
        {footerItems.map((item) => {
          return <FooterMobileItem key={item.name} {...item} />;
        })}
      </ul>
    </nav>
  );
};

export default FooterMobile;
