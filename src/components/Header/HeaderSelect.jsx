import { MenuItem, Select } from "@mui/material";
import { moreSelectMenuPropsSX, moreSelectSX } from "./styledSX";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

import DisplaySettingsIcon from "@mui/icons-material/DisplaySettings";

const HeaderSelect = ({ open, onClose }) => {
  return (
    <Select
      open={open}
      onClose={onClose}
      sx={moreSelectSX}
      id="basic-menu"
      MenuProps={moreSelectMenuPropsSX}>
      <MenuItem component={Link} to="/bookmarks">
        <BookmarkBorderIcon />
        Bookmarks
      </MenuItem>
      <MenuItem>
        <DisplaySettingsIcon />
        Display
      </MenuItem>
    </Select>
  );
};

export default HeaderSelect;

HeaderSelect.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
};
