import { Stack, styled } from "@mui/material";
import PropTypes from "prop-types";
import { Tick } from "@/icons";

const InnerIcon = styled("span", {
  shouldForwardProp: (prop) => !["isRound", "isDisabled"].includes(prop),
})(({ isDisabled, isRound }) => ({
  borderWidth: "2px",
  borderStyle: "solid",
  borderColor: isDisabled ? "#bac5cc" : "#1d9bf0",
  borderRadius: isRound ? "50%" : "0.25rem",
  backgroundColor: isDisabled ? "#bac5cc" : "#1d9bf0",
}));

export const Checked = ({ isRound, isDisabled }) => {
  return (
    <Stack
      alignItems="center"
      alignContent="center"
      height={24}
      width={24}
      opacity={isDisabled ? 0.5 : 1}>
      <InnerIcon isDisabled={isDisabled} isRound={isRound}>
        <Tick size={16} fill="white" />
      </InnerIcon>
    </Stack>
  );
};

Checked.propTypes = {
  isRound: PropTypes.bool,
  isDisabled: PropTypes.bool,
};

Checked.defaultProps = {
  isDisabled: false,
  isRound: false,
};
