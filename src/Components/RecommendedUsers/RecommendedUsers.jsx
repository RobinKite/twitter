import React from "react";
import Avatar from "@mui/material/Avatar";
import FollowButton from "../FollowButton/FollowButton";
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

const RecommendedUsers = () => {
  return (
    <Stack sx={authorsContainerSX}>
      {usersToFollow.map((user, index) => (
        <RecommendedUserCard key={index} {...user} id={user.id} />
      ))}
    </Stack>
  );
};

export default RecommendedUsers;
