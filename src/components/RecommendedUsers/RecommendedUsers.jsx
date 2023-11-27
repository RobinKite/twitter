import PropTypes from "prop-types";
import Avatar from "@mui/material/Avatar";
import { Stack, Typography } from "@mui/material";
import { recommendedUserCardSX, recommendedUserInfoSX } from "./styleSX";
import { FollowButton } from "..";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchUsers } from "@/redux/slices/userSlice";
// import { fetchUsers } from "@/redux/slices/usersListSlice";

export const RecommendedUserCard = ({
  id,
  fullName,
  userTag,
  avatarUrl,
  useButton,
  isFollowedByUser,
}) => {
  return (
    <Stack sx={recommendedUserCardSX}>
      <Avatar src={avatarUrl} alt={`${fullName}'s avatar`} />
      <Stack sx={recommendedUserInfoSX}>
        <Typography variant="subtitle1">{fullName}</Typography>
        <Typography variant="body2" color="textSecondary">
          {userTag ? `@${userTag}` : fullName}
        </Typography>
      </Stack>
      {useButton && (
        <FollowButton
          id={id}
          userName={userTag || fullName}
          isFollowedByUser={isFollowedByUser}
        />
      )}
    </Stack>
  );
};

export const RecommendedUsers = ({ useButton, usersList }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers(3));
  }, [dispatch]);

  return (
    <Stack>
      {usersList.map((user, index) => (
        <RecommendedUserCard
          key={index}
          {...user}
          id={`${user.id}`}
          useButton={useButton}
          isFollowedByUser={user.isFollowedByUser}
        />
      ))}
    </Stack>
  );
};

RecommendedUserCard.propTypes = {
  fullName: PropTypes.string.isRequired,
  userTag: PropTypes.string,
  avatarUrl: PropTypes.string,
  useButton: PropTypes.bool,
  id: PropTypes.string.isRequired,
  isFollowedByUser: PropTypes.bool.isRequired,
};

RecommendedUserCard.defaultProps = {
  useButton: false,
  userTag: "",
  avatarUrl: "",
};

RecommendedUsers.propTypes = {
  useButton: PropTypes.bool,
  usersList: PropTypes.arrayOf(PropTypes.object),
};

RecommendedUsers.defaultProps = {
  useButton: false,
};
