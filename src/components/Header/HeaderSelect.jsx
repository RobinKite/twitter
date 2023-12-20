import { MenuItem } from "@mui/material";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Display, Gear } from "@/icons";
import { CustomSelect, DisplayModal } from "..";
import { useState } from "react";

const HeaderSelect = ({ open, onClose }) => {
  const [isDisplayShown, setIsDisplayShown] = useState(false);

  return (
    <>
      <CustomSelect
        open={open}
        onClose={onClose}
        customStyles={{ width: "318px", fontSize: 20, gap: 3 }}>
        <MenuItem component={Link} to="/settings">
          <Gear size={22} />
          Settings
        </MenuItem>
        <MenuItem onClick={() => setIsDisplayShown(true)}>
          <Display size={22} />
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
