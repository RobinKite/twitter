import { Avatar, Stack, Typography, useMediaQuery } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { FollowButton } from "@/components";
import { fetchUsers } from "@/redux/slices/userSlice";
import { setModalPost } from "@/redux/slices/appSlice";
import { userCardSX } from "./styleSX";

export const UserCard = ({
  avatarUrl,
  fullName,
  userTag,
  onClick,
  children,
  isInModal,
}) => {
  const isMobile = useMediaQuery("(max-width: 767px)");
  const isTablet = useMediaQuery("(min-width: 767px) and (max-width: 1023px)");

  return (
    <Stack onClick={onClick} sx={userCardSX}>
      <Avatar src={avatarUrl} alt={`${fullName}'s avatar`} />
      {(isInModal || (!isMobile && !isTablet)) && (
        <Stack
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr min-content",
            overflow: "hidden",
            flexGrow: 1,
          }}>
          <Stack sx={{ overflow: "hidden" }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 700, textWrap: "nowrap" }}>
              {fullName}
            </Typography>
            <Typography variant="body2" color="textSecondary" align="left">
              @{userTag}
            </Typography>
          </Stack>
          <Stack>{children}</Stack>
        </Stack>
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
  isInModal: PropTypes.bool,
};

export const RecommendedUserCard = ({
  id,
  fullName,
  userTag,
  avatarUrl,
  useButton,
  isFollowedByUser,
  isInModal,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = () => {
    navigate(`/user/${id}`);
    dispatch(setModalPost(false));
  };

  return (
    <Stack sx={userCardSX}>
      <UserCard
        avatarUrl={avatarUrl}
        fullName={fullName}
        userTag={userTag}
        onClick={handleClick}
        isInModal={isInModal}
      />
      {useButton && (
        <FollowButton
          key={id}
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
  isFollowedByUser: PropTypes.bool,
  isInModal: PropTypes.bool,
};

RecommendedUserCard.defaultProps = {
  useButton: false,
  userTag: "",
  avatarUrl: "",
};

export const RecommendedUsers = ({ useButton, usersList, isShowMore }) => {
  const dispatch = useDispatch();

  const renderList = isShowMore
    ? usersList
    : usersList.length > 2
      ? usersList.slice(2)
      : usersList;

  useEffect(() => {
    dispatch(fetchUsers(5));
  }, [dispatch]);

  return (
    <Stack>
      {renderList.map((user) => (
        <RecommendedUserCard
          key={user.id}
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
