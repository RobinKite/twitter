import { MenuItem, Select } from "@mui/material";
import { moreSelectMenuPropsSX, moreSelectSX } from "./styledSX";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Display, Gear } from "@/icons";

const HeaderSelect = ({ open, onClose }) => {
  return (
    <>
      <Select
        open={open}
        onClose={onClose}
        sx={moreSelectSX}
        id="basic-menu"
        MenuProps={moreSelectMenuPropsSX}>
        <MenuItem component={Link} to="/settings">
          <Gear size={22} />
          Settings
        </MenuItem>
        <MenuItem>
          <Display size={22} />
          Display
        </MenuItem>
      </Select>
    </>
  );
};

export default HeaderSelect;

HeaderSelect.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
};
