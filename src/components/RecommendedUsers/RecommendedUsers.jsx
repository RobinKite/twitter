import { Avatar, Stack, Typography, useMediaQuery } from "@mui/material";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { FollowButton } from "@/components";
import { fetchUsers } from "@/redux/slices/userSlice";
import { userCardSX } from "./styleSX";
import { useNavigate } from "react-router-dom";

export const UserCard = ({ avatarUrl, fullName, userTag, onClick, children }) => {
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
    navigate(`/user/${id}`);
  };

  return (
    <Stack sx={userCardSX} onClick={handleClick}>
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

export const RecommendedUsers = ({ useButton, usersList, isShowMore }) => {
  const dispatch = useDispatch();

  const renderList = isShowMore ? usersList : usersList.slice(2);

  useEffect(() => {
    dispatch(fetchUsers(5));
  }, [dispatch]);

  return (
    <Stack>
      {renderList.map((user, index) => (
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
  isShowMore: PropTypes.bool.isRequired,
  useButton: PropTypes.bool,
  usersList: PropTypes.arrayOf(PropTypes.object),
};

RecommendedUsers.defaultProps = {
  isShowMore: false,
  useButton: false,
};
