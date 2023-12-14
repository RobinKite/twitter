import { MenuItem } from "@mui/material";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Display, Gear } from "@/icons";
import { CustomSelect } from "..";

const HeaderSelect = ({ open, onClose }) => {
  return (
    <CustomSelect open={open} onClose={onClose}>
      <MenuItem component={Link} to="/settings">
        <Gear size={22} />
        Settings
      </MenuItem>
      <MenuItem>
        <Display size={22} />
        Display
      </MenuItem>
    </CustomSelect>
  );
};

export default HeaderSelect;

HeaderSelect.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
};
