import React, { useState } from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import ModalUnFollow from "../ModalUnFollow/ModalUnFollow";

const FollowButtonStyled = styled(Button)(({ isFollowing }) => ({
  height: "40px",
  marginLeft: "auto",
  borderRadius: 25,
  color: isFollowing ? "rgb(0, 0, 0)" : "rgb(248, 248, 248)",
  backgroundColor: isFollowing ? "rgb(248, 248, 248)" : "rgb(0, 0, 0)",
  textTransform: "capitalize",
  "& p": {
    paddingTop: 3,
    fontWeight: "bold",
  },
  "&:hover": {
    backgroundColor: isFollowing ? "rgb(255, 0, 0, 0.08)" : "rgb(0, 0, 0)",
    color: isFollowing ? "rgb(255, 0, 0)" : "rgb(255, 255, 255)",
  },
}));

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
        isFollowing={isFollowing}
      >
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
