import React, { useState } from "react";
import ModalUnFollow from "../ModalUnFollow/ModalUnFollow";
import { FollowButtonStyled } from "./styleSX";

const FollowButton = ({ initialIsFollowing, id }) => {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
  const [showModal, setShowModal] = useState(false);

  const handleFollow = () => {
    setIsFollowing(!isFollowing);
    setShowModal(false);
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  return (
    <>
      <FollowButtonStyled
        variant="contained"
        onClick={handleFollow}
        isFollowing={isFollowing}>
        <p>{isFollowing ? "Following" : "Follow"}</p>
      </FollowButtonStyled>

      {isFollowing && (
        <ModalUnFollow
          userTag="UserTag"
          open={showModal}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
};

export default FollowButton;
