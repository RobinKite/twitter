import React from "react";
import Avatar from "@mui/material/Avatar";
import FollowButton from "../FollowButton/FollowButton";
import Typography from "@mui/material/Typography";
import classNames from "classnames";
import styles from "./RecommendedUsers.module.scss";

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
    <div className={classNames(styles.RecommendedUserCard)}>
      <Avatar src={avatarUrl} alt={`${fullName}'s avatar`} />
      <div className={classNames(styles.RecommendedUserInfo)}>
        <Typography variant="subtitle1" component="div">
          {fullName}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          @{userTag}
        </Typography>
      </div>
      <FollowButton id={id} />
    </div>
  );
};

const RecommendedUsers = () => {
  return (
    <div className={classNames(styles.authorsContainer)}>
      {usersToFollow.map((user, index) => (
        <RecommendedUserCard key={index} {...user} id={user.id} />
      ))}
    </div>
  );
};

export default RecommendedUsers;
