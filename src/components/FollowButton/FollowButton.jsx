import { Typography } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { ConfirmationDialog } from "@/components";
import { deleteSubscribeToUser, postSubscribeToUser } from "@/redux/slices/userSlice";
import { FollowButtonStyled } from "./styleSX";

export const FollowButton = ({ id, userName, isFollowedByUser }) => {
  const dispatch = useDispatch();
  const [isFollowing, setIsFollowing] = useState(isFollowedByUser);
  const [isHovering, setIsHovering] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  const handleFollow = () => {
    setOpenDialog(false);
    setIsFollowing(true);
    dispatch(postSubscribeToUser(id));
  };

  const handleConfirmation = () => {
    setOpenDialog(false);
    setIsFollowing(false);
    dispatch(deleteSubscribeToUser(id));
  };

  return (
    <>
      <FollowButtonStyled
        variant="contained"
        onClick={isFollowing ? () => setOpenDialog(true) : handleFollow}
        isFollowing={isFollowing}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        sx={{ padding: "0.375rem 1.175rem", marginRight: "0.5rem" }}>
        <Typography sx={{ fontSize: "0.85rem" }}>
          {!isFollowing ? "Follow" : isHovering ? "Unfollow" : "Following"}
        </Typography>
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
    </>
  );
};

FollowButton.propTypes = {
  userName: PropTypes.string,
  id: PropTypes.string,
  isFollowedByUser: PropTypes.bool,
};
