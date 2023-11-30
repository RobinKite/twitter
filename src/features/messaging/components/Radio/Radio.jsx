import { FormControlLabel, Radio as MuiRadio } from "@mui/material";
import PropTypes from "prop-types";
import { Checked, Unchecked } from "@/features/messaging/icons";
import { labelSx, radioSx, typographySx } from "./styles";

export const Radio = ({ labelText, value }) => {
  return (
    <FormControlLabel
      value={value}
      sx={labelSx}
      slotProps={{ typography: { sx: typographySx } }}
      labelPlacement="start"
      control={
        <MuiRadio
          icon={<Unchecked isRound={true} />}
          checkedIcon={<Checked isRound={true} />}
          sx={radioSx}
        />
      }
      label={labelText}
    />
  );
};

Radio.propTypes = {
  labelText: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
