import { Stack, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { RecommendedUsers } from "@/components";
import { searchBoxSX, searchLineSX, searchProgressBarContainerSX } from "./styleSX";

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
