import { Stack, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { searchBoxSX, searchLineSX, searchProgressBarContainerSX } from "./styleSX";
import { RecommendedUsers } from "..";
import { useSelector } from "react-redux";

export function SearchProgressBar({ searchText }) {
  const usersList = useSelector((state) => state.user.friendSearches);

  return (
    <Stack sx={searchProgressBarContainerSX}>
      <Typography sx={searchBoxSX}>Search for &#x22;{searchText}&#x22;</Typography>
      <Stack sx={searchLineSX}></Stack>
      {usersList.length ? (
        <RecommendedUsers useButton={false} usersList={usersList} />
      ) : (
        <Typography sx={{ padding: "8px" }}>No matches</Typography>
      )}
    </Stack>
  );
}

SearchProgressBar.propTypes = {
  searchText: PropTypes.string.isRequired,
};
