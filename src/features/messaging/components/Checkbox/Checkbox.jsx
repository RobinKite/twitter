import { Box, FormControlLabel, Typography } from "@mui/material";
import { Checkbox as MuiCheckbox } from "@mui/material";
import { styled } from "@mui/material";
import PropTypes from "prop-types";
import { Checked, Unchecked } from "@/features/messaging/icons";
import { checkboxSx, labelSx, descriptionSx, typographySx } from "./styles";

const Description = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "isDisabled",
})(({ isDisabled }) => ({
  opacity: isDisabled ? 0.5 : 1,
  ...descriptionSx,
}));

export const Checkbox = ({ labelText, description, isDisabled }) => {
  return (
    <Box>
      <FormControlLabel
        disabled={isDisabled}
        labelPlacement="start"
        sx={labelSx}
        slotProps={{ typography: { sx: typographySx } }}
        control={
          <MuiCheckbox
            icon={<Unchecked isDisabled={isDisabled} />}
            checkedIcon={<Checked isDisabled={isDisabled} />}
            sx={checkboxSx}
          />
        }
        label={labelText}
      />
      <Description isDisabled={isDisabled}>{description}</Description>
    </Box>
  );
};

Checkbox.propTypes = {
  labelText: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
};

Checkbox.defaultProps = {
  isDisabled: false,
};
