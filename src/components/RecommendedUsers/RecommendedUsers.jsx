import { Avatar, Stack, Typography, useMediaQuery } from "@mui/material";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { FollowButton } from "@/components";
import { fetchUsers } from "@/redux/slices/userSlice";
import { userCardSX } from "./styleSX";
import { useNavigate } from "react-router-dom";

export const UserCard = ({
  avatarUrl,
  fullName,
  userTag,
  onClick,
  children,
  // stylesSX,
}) => {
  const isMobile = useMediaQuery("(max-width: 767px)");
  const isTablet = useMediaQuery("(min-width: 767px) and (max-width: 1023px)");

  return (
    <Stack onClick={onClick} sx={userCardSX}>
      <Avatar src={avatarUrl} alt={`${fullName}'s avatar`} />
      {!isMobile && !isTablet && (
        <>
          <Stack overflow="hidden" sx={{ marginRight: "auto", marginLeft: "0.75rem" }}>
            <Typography fontWeight={700} variant="subtitle1" noWrap={true}>
              {fullName}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {userTag ? `@${userTag}` : fullName}
            </Typography>
          </Stack>
          {children}
        </>
      )}
    </Stack>
  );
};

UserCard.propTypes = {
  avatarUrl: PropTypes.string,
  fullName: PropTypes.string,
  userTag: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.object,
};

export const RecommendedUserCard = ({
  id,
  fullName,
  userTag,
  avatarUrl,
  useButton,
  isFollowedByUser,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Перехід на новий роут і передача id
    navigate(`/user/${id}`);
    console.log(id);
  };

  return (
    <Stack sx={userCardSX} onClick={handleClick}>
      {/* <Avatar src={avatarUrl} alt={`${fullName}'s avatar`} />
      <Stack marginLeft="0.75rem" overflow="hidden">
        <Typography fontWeight={500} variant="subtitle1" noWrap={true}>
          {fullName}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {userTag ? `@${userTag}` : fullName}
        </Typography>
      </Stack> */}
      <UserCard avatarUrl={avatarUrl} fullName={fullName} userTag={userTag} />
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
