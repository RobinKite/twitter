import PropTypes from "prop-types";
import Avatar from "@mui/material/Avatar";
import { Stack, Typography } from "@mui/material";
import { recommendedUserCardSX, recommendedUserInfoSX } from "./styleSX";
import { FollowButton } from "..";

const usersToFollow = [
  {
    id: "1",
    fullName: "Taras Karas",
    userTag: "tkaras",
    avatarUrl: "https://example.com/avatar1.jpg",
  },
  {
    id: "2",
    fullName: "Upra Kupra",
    userTag: "ukupra",
    avatarUrl: "https://example.com/avatar2.jpg",
  },
  {
    id: "3",
    fullName: "Dar bar",
    userTag: "dbar",
    avatarUrl: "https://example.com/avatar3.jpg",
  },
];

export const RecommendedUserCard = ({ id, fullName, userTag, avatarUrl, useButton }) => {
  return (
    <Stack sx={recommendedUserCardSX}>
      <Avatar src={avatarUrl} alt={`${fullName}'s avatar`} />
      <Stack sx={recommendedUserInfoSX}>
        <Typography variant="subtitle1">{fullName}</Typography>
        <Typography variant="body2" color="textSecondary">
          @{userTag}
        </Typography>
      </Stack>
      {useButton && <FollowButton id={id} />}
    </Stack>
  );
};

export const RecommendedUsers = ({ useButton }) => {
  const usersList = usersToFollow;
  return (
    <Stack>
      {usersList.map((user, index) => (
        <RecommendedUserCard key={index} {...user} id={user.id} useButton={useButton} />
      ))}
    </Stack>
  );
};

RecommendedUserCard.propTypes = {
  id: PropTypes.string.isRequired,
  fullName: PropTypes.string.isRequired,
  userTag: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string.isRequired,
  useButton: PropTypes.bool,
};

RecommendedUserCard.defaultProps = {
  useButton: false,
};

RecommendedUsers.propTypes = {
  useButton: PropTypes.bool,
};

RecommendedUsers.defaultProps = {
  useButton: false,
};
