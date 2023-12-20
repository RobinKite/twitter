import { MenuItem, useTheme } from "@mui/material";

import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Display, Gear } from "@/icons";
import { CustomSelect, DisplayModal } from "..";
import { useState } from "react";

const HeaderSelect = ({ open, onClose }) => {
  const theme = useTheme();
  const [isDisplayShown, setIsDisplayShown] = useState(false);

  return (
    <>
      <CustomSelect
        open={open}
        onClose={onClose}
        customStyles={{ width: "318px", fontSize: 20, gap: 3 }}>
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
          onClick={() => setIsDisplayShown(true)}
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
      </CustomSelect>

      {isDisplayShown && (
        <DisplayModal onClose={() => setIsDisplayShown(false)} open={isDisplayShown} />
      )}
    </>
  );
};

export default HeaderSelect;

HeaderSelect.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
};
