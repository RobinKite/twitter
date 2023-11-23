import PropTypes from "prop-types";
import Avatar from "@mui/material/Avatar";
import { Stack, Typography } from "@mui/material";
import { recommendedUserCardSX, recommendedUserInfoSX } from "./styleSX";
import { FollowButton } from "..";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchUsers } from "@/redux/slices/usersListSlice";

export const RecommendedUserCard = ({ id, fullName, userTag, avatarUrl, useButton }) => {
  return (
    <Stack sx={recommendedUserCardSX}>
      <Avatar src={avatarUrl} alt={`${fullName}'s avatar`} />
      <Stack sx={recommendedUserInfoSX}>
        <Typography variant="subtitle1">{fullName}</Typography>
        <Typography variant="body2" color="textSecondary">
          {userTag ? `@${userTag}` : fullName}
        </Typography>
      </Stack>
      {useButton && <FollowButton id={id} userName={userTag || fullName} />}
    </Stack>
  );
};

export const RecommendedUsers = ({ useButton }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers(3));
  }, [dispatch]);
  const usersList = useSelector((state) => state.usersList.users);

  return (
    <Stack>
      {usersList.map((user, index) => (
        <RecommendedUserCard
          key={index}
          {...user}
          id={`${user.id}`}
          useButton={useButton}
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
};

RecommendedUserCard.defaultProps = {
  useButton: false,
  userTag: "",
  avatarUrl: "",
};

RecommendedUsers.propTypes = {
  useButton: PropTypes.bool,
};

RecommendedUsers.defaultProps = {
  useButton: false,
};
