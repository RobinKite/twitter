import { Stack, styled } from "@mui/material";
import PropTypes from "prop-types";

const Icon = styled("span", {
  shouldForwardProp: (prop) => !["isRound", "isDisabled"].includes(prop),
})(({ isDisabled, isRound }) => ({
  width: 20,
  height: 20,
  borderWidth: "2px",
  borderStyle: "solid",
  borderColor: isDisabled ? "#bbb" : "#536471",
  borderRadius: isRound ? "50%" : "0.25rem",
}));

export const Unchecked = ({ isRound, isDisabled }) => {
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      height={24}
      width={24}
      opacity={isDisabled ? 0.5 : 1}>
      <Icon isRound={isRound} isDisabled={isDisabled} />
    </Stack>
  );
};

Unchecked.defaultProps = {
  isDisabled: false,
  isRound: false,
};

Unchecked.propTypes = {
  isDisabled: PropTypes.bool,
  isRound: PropTypes.bool,
};
