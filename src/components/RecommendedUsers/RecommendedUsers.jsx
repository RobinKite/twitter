import Avatar from "@mui/material/Avatar";
import { FollowButton } from "../../components";
import { Stack, Typography } from "@mui/material";
import {
  recommendedUserCardSX,
  recommendedUserInfoSX,
  authorsContainerSX,
} from "./styleSX";

const usersToFollow = [
  {
    id: "1",
    fullName: "Taras Karas",
    userTag: "tkaras",
    avatarUrl: "/",
  },
  {
    id: "2",
    fullName: "Upra Kupra",
    userTag: "ukupra",
    avatarUrl: "/",
  },
  {
    id: "3",
    fullName: "Dar bar",
    userTag: "dbar",
    avatarUrl: "/",
  },
];

const RecommendedUserCard = ({ id, fullName, userTag, avatarUrl }) => {
  return (
    <Stack sx={recommendedUserCardSX}>
      <Avatar src={avatarUrl} alt={`${fullName}'s avatar`} />
      <Stack sx={recommendedUserInfoSX}>
        <Typography variant="subtitle1" component="div">
          {fullName}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          @{userTag}
        </Typography>
      </Stack>
      <FollowButton id={id} />
    </Stack>
  );
};

export const RecommendedUsers = () => {
  return (
    <Stack sx={authorsContainerSX}>
      {usersToFollow.map((user, index) => (
        <RecommendedUserCard key={index} {...user} id={user.id} />
      ))}
    </Stack>
  );
};
