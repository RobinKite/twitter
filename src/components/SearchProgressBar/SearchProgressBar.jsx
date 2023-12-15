import PropTypes from "prop-types";
import { Stack, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { searchBoxSX, searchLineSX, searchProgressBarContainerSX } from "./styleSX";
import { RecommendedUserCard } from "..";

export function SearchProgressBar({ searchText }) {
  const usersList = useSelector((state) => state.user.friendSearches);

  return (
    <Stack sx={searchProgressBarContainerSX}>
      <Typography sx={searchBoxSX}>Search for &#x22;{searchText}&#x22;</Typography>
      <Stack sx={searchLineSX}></Stack>
      {usersList.length ? (
        usersList.map((user) => (
          <RecommendedUserCard
            key={user.id}
            {...user}
            id={`${user.id}`}
            useButton={false}
            isFollowedByUser={user.isFollowedByUser}
          />
        ))
      ) : (
        <Typography sx={{ padding: "8px" }}>No matches</Typography>
      )}
    </Stack>
  );
}

SearchProgressBar.propTypes = {
  searchText: PropTypes.string.isRequired,
};
