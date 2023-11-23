import { Stack, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { searchBoxSX, searchLineSX, searchProgressBarContainerSX } from "./styleSX";
import { RecommendedUsers } from "..";

export function SearchProgressBar({ searchText }) {
  return (
    <Stack sx={searchProgressBarContainerSX}>
      <Typography sx={searchBoxSX}>Search for &#x22;{searchText}&#x22;</Typography>
      <Stack sx={searchLineSX}></Stack>
      <RecommendedUsers useButton={false} />
    </Stack>
  );
}

SearchProgressBar.propTypes = {
  searchText: PropTypes.string.isRequired,
};
