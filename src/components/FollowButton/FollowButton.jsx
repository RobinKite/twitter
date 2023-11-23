import { useState } from "react";
import PropTypes from "prop-types";
import { FollowButtonStyled } from "./styleSX";
import { ModalUnFollow } from "..";
import { useDispatch } from "react-redux";
import { deleteSubcribeToUser, postSubcribeToUser } from "@/redux/slices/friendsSlice";

export const FollowButton = ({ id, userName }) => {
  const [isFollowing, setIsFollowing] = useState(null);
  const [isHovering, setIsHovering] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const handleFollow = () => {
    setIsFollowing(!isFollowing);
    dispatch(postSubcribeToUser(id));
    setShowModal(false);
  };

  const handleUnfollow = () => {
    setIsFollowing(!isFollowing);
    dispatch(deleteSubcribeToUser(id));
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
      {isFollowing ? (
        <FollowButtonStyled
          variant="contained"
          onClick={handleOpenModal}
          isFollowing={isFollowing}
          onMouseEnter={onMouseEnterHandler}
          onMouseLeave={onMouseLeaveHandler}
          sx={{ minWidth: "110px" }}>
          {isHovering ? <p>Unfollow </p> : <p>Following</p>}
        </FollowButtonStyled>
      ) : (
        <FollowButtonStyled
          variant="contained"
          onClick={handleFollow}
          isFollowing={isFollowing}>
          <p>Follow</p>
        </FollowButtonStyled>
      )}

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
  initialIsFollowing: PropTypes.bool,
  userName: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

FollowButton.defaultProps = {
  initialIsFollowing: false,
};
