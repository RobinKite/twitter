import { Box } from "@mui/material";
import { styled } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { ConfirmationDialog } from "@/components";
import { deleteSubscribeToUser, postSubcribeToUser } from "@/redux/slices/userSlice";
import { FollowButtonStyled } from "./styleSX";

const Container = styled(Box)({
  minWidth: 110,
  display: "flex",
  justifyContent: "end",
  marginLeft: "auto",
});

export const FollowButton = ({ id, userName, isFollowedByUser }) => {
  const dispatch = useDispatch();
  const [isFollowing, setIsFollowing] = useState(isFollowedByUser);
  const [isHovering, setIsHovering] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  const handleFollow = () => {
    setIsFollowing(true);
    dispatch(postSubcribeToUser(id));
    setOpenDialog(false);
  };

  const handleConfirmation = () => {
    setOpenDialog(false);
    setIsFollowing(false);
    dispatch(deleteSubscribeToUser(id));
  };

  return (
    <Container>
      <FollowButtonStyled
        variant="contained"
        onClick={isFollowing ? () => setOpenDialog(true) : handleFollow}
        isFollowing={isFollowing}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        sx={{ minWidth: "110px" }}>
        {isHovering ? (
          <p>{isFollowing ? "Unfollow" : "Follow"}</p>
        ) : (
          <p>{isFollowing ? "Following" : "Follow"}</p>
        )}
      </FollowButtonStyled>
      {openDialog && (
        <ConfirmationDialog
          title={`Unfollow @${userName}`}
          description="Their posts will no longer show up in your For You timeline. You can still view
          their profile unless their posts are protected."
          actionButton={{ title: "Unfollow", callback: handleConfirmation }}
          closeButton={{ title: "Cancel", callback: () => setOpenDialog(false) }}
        />
      )}
    </Container>
  );
};

FollowButton.propTypes = {
  userName: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  isFollowedByUser: PropTypes.bool.isRequired,
};
