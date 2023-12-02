import PropTypes from "prop-types";

export const withSize = (IconComponent) => {
  function ResizableIcon({ size, ...props }) {
    return <IconComponent {...props} height={`${size}px`} />;
  }

  ResizableIcon.propTypes = {
    size: PropTypes.number,
  };

  ResizableIcon.defaultProps = {
    size: 20,
  };

  return ResizableIcon;
};
