import { useState } from "react";
import PropTypes from "prop-types";
import { FollowButtonStyled } from "./styleSX";
import { ModalUnFollow } from "..";
import { useDispatch } from "react-redux";
import { deleteSubscribeToUser, postSubcribeToUser } from "@/redux/slices/userSlice";

export const FollowButton = ({ id, userName, isFollowedByUser }) => {
  const [isFollowing, setIsFollowing] = useState(isFollowedByUser);
  const [isHovering, setIsHovering] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const handleFollow = () => {
    setIsFollowing(true);
    dispatch(postSubcribeToUser(id));
    setShowModal(false);
  };

  const handleUnfollow = () => {
    setIsFollowing(false);
    dispatch(deleteSubscribeToUser(id));
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const onMouseEnterHandler = () => {
    setIsHovering(true);
  };

  const onMouseLeaveHandler = () => {
    setIsHovering(false);
  };

  return (
    <>
      <FollowButtonStyled
        variant="contained"
        onClick={isFollowing ? handleOpenModal : handleFollow}
        isFollowing={isFollowing}
        onMouseEnter={onMouseEnterHandler}
        onMouseLeave={onMouseLeaveHandler}
        sx={{ minWidth: "110px" }}>
        {isHovering ? (
          <p>{isFollowing ? "Unfollow" : "Follow"}</p>
        ) : (
          <p>{isFollowing ? "Following" : "Follow"}</p>
        )}
      </FollowButtonStyled>

      {showModal && (
        <ModalUnFollow
          userTag={userName}
          showModal={showModal}
          onClose={handleCloseModal}
          handleUnfollow={handleUnfollow}
        />
      )}
    </>
  );
};

FollowButton.propTypes = {
  userName: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  isFollowedByUser: PropTypes.bool.isRequired,
};
