import { Stack, Typography, Avatar } from "@mui/material";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { FollowButton } from "@/components";
import { Endpoint } from "@/constants";
import { client } from "@/services";
import { recommendedUserCardSX } from "./styleSX";

export const RecommendedUserCard = ({ id, fullName, userTag, avatarUrl, useButton }) => {
  return (
    <Stack sx={recommendedUserCardSX}>
      <Avatar src={avatarUrl} alt="Avatar" />
      <Stack sx={{ marginLeft: "0.75rem" }}>
        <Typography fontWeight={500} variant="subtitle1">
          {fullName}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          @{userTag}
        </Typography>
      </Stack>
      {useButton && <FollowButton id={id} />}
    </Stack>
  );
};

RecommendedUserCard.propTypes = {
  id: PropTypes.string.isRequired,
  fullName: PropTypes.string.isRequired,
  userTag: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string,
  useButton: PropTypes.bool,
};

RecommendedUserCard.defaultProps = {
  useButton: false,
};

export const RecommendedUsers = ({ useButton }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    client
      .get(Endpoint.RECOMMENDED_USERS)
      .then((response) => response?.data?.content || [])
      .then((users) => setUsers(users.slice(2, 5)));
  }, []);

  return (
    <Stack>
      {users.map((user, index) => (
        <RecommendedUserCard key={index} {...user} id={user.id} useButton={useButton} />
      ))}
    </Stack>
  );
};

RecommendedUsers.propTypes = {
  useButton: PropTypes.bool,
};

RecommendedUsers.defaultProps = {
  useButton: false,
};
