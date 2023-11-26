import { styled } from "@mui/material";
import { useState } from "react";
import { ConfirmationDialog } from "@/components";
import { FollowButtonStyled } from "./styleSX";

const Container = styled("div")({
  minWidth: 110,
  display: "flex",
  justifyContent: "end",
  marginLeft: "auto",
});

export const FollowButton = () => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  const handleFollow = () => {
    setIsFollowing(!isFollowing);
  };

  const handleConfirmation = () => {
    setOpenDialog(false);
    setIsFollowing(false);
  };

  return (
    <>
      <Container>
        {isFollowing ? (
          <FollowButtonStyled
            variant="contained"
            onClick={() => setOpenDialog(true)}
            isFollowing={isFollowing}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            sx={{ minWidth: "110px" }}>
            {isHovering ? <p>Unfollow</p> : <p>Following</p>}
          </FollowButtonStyled>
        ) : (
          <FollowButtonStyled
            variant="contained"
            onClick={handleFollow}
            isFollowing={isFollowing}>
            <p>Follow</p>
          </FollowButtonStyled>
        )}
      </Container>

      {openDialog && (
        <ConfirmationDialog
          title="Unfollow @user"
          description="Their posts will no longer show up in your For You timeline. You can still view
          their profile unless their posts are protected."
          actionButton={{ title: "Unfollow", callback: handleConfirmation }}
          closeButton={{ title: "Cancel", callback: () => setOpenDialog(false) }}
        />
      )}
    </>
  );
};
