import { useState } from "react";
import PropTypes from "prop-types";
import { FollowButtonStyled } from "./styleSX";
import { ModalUnFollow } from "..";

export const FollowButton = ({ id }) => {
  const [isFollowing, setIsFollowing] = useState(null);
  const [isHovering, setIsHovering] = useState(false);
  const [showModal, setShowModal] = useState(false);

  console.log(id);

  const handleFollow = () => {
    setIsFollowing(!isFollowing);
    setShowModal(false);
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
          userTag="UserTag"
          showModal={showModal}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
};

FollowButton.propTypes = {
  initialIsFollowing: PropTypes.bool,
  id: PropTypes.string,
};
