import { useState } from "react";
import { ModalUnFollow } from "../../components";
import { FollowButtonStyled } from "./styleSX";
import PropTypes from "prop-types";

export const FollowButton = ({ initialIsFollowing }) => {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
  const [showModal, setShowModal] = useState(false);

  const handleFollow = () => {
    setIsFollowing(!isFollowing);
    setShowModal(false);
  };

  // const handleOpenModal = () => {
  //   setShowModal(true);
  // };

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

FollowButton.propTypes = {
  initialIsFollowing: PropTypes.bool,
};
