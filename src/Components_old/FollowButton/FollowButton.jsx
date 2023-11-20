import { useState } from "react";
import { ModalUnFollow } from "../../components";
import { FollowButtonStyled } from "./styleSX";

export const FollowButton = ({ initialIsFollowing, id }) => {
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
      <FollowButtonStyled variant="contained" onClick={handleFollow}>
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
