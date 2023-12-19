import { MenuItem, Select, useTheme } from "@mui/material";
import { moreSelectMenuPropsSX, moreSelectSX } from "./styledSX";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Display, Gear } from "@/icons";

const HeaderSelect = ({ open, onClose }) => {
  const theme = useTheme();
  return (
    <>
      <Select
        open={open}
        onClose={onClose}
        sx={moreSelectSX}
        id="basic-menu"
        MenuProps={moreSelectMenuPropsSX}>
        <MenuItem
          component={Link}
          to="/settings"
          sx={{
            color:
              theme.palette.mode === "light"
                ? theme.palette.common.secondary
                : theme.palette.dark.light_grey,
          }}>
          <Gear
            size={22}
            style={{
              fill: theme.palette[theme.palette.mode].secondary,
            }}
          />
          Settings
        </MenuItem>
        <MenuItem
          sx={{
            color:
              theme.palette.mode === "light"
                ? theme.palette.common.secondary
                : theme.palette.dark.light_grey,
          }}>
          <Display
            size={22}
            style={{
              fill: theme.palette[theme.palette.mode].secondary,
            }}
          />
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
