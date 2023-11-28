import { Avatar, Stack, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { FollowButton } from "@/components";
import { fetchUsers } from "@/redux/slices/userSlice";
import { userCardSX } from "./styleSX";

export const RecommendedUserCard = ({
  id,
  fullName,
  userTag,
  avatarUrl,
  useButton,
  isFollowedByUser,
}) => {
  return (
    <Stack sx={userCardSX}>
      <Avatar src={avatarUrl} alt={`${fullName}'s avatar`} />
      <Stack marginLeft="0.75rem">
        <Typography fontWeight={500} variant="subtitle1">
          {fullName}
        </Typography>
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

RecommendedUsers.propTypes = {
  useButton: PropTypes.bool,
  usersList: PropTypes.arrayOf(PropTypes.object),
};

RecommendedUsers.defaultProps = {
  useButton: false,
};
