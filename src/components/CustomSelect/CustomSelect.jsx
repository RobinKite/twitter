import { Select } from "@mui/material";
import PropTypes from "prop-types";
import { moreSelectMenuPropsSX, moreSelectSX } from "./stylesSX";

export const CustomSelect = ({ children, open, onClose, customStyles }) => {
  const { width, fontSize, gap } = customStyles;
  return (
    <Select
      open={open}
      onClose={() => onClose(false)}
      sx={moreSelectSX}
      id="basic-menu"
      MenuProps={moreSelectMenuPropsSX({ width, fontSize, gap })}>
      {children}
    </Select>
  );
};

CustomSelect.propTypes = {
  children: PropTypes.any,
  open: PropTypes.bool,
  onClose: PropTypes.func,
  customStyles: PropTypes.object,
};
