import { Modal, Button, Typography } from "@mui/material";
import { useState } from "react";
import {
  ButtonCancell,
  ButtonContainer,
  ButtonUnfollow,
  ModalContainer,
  ModalContent,
} from "./styleSX";

export const ModalUnFollow = ({ userTag }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleUnfollow = () => {
    handleClose();
  };

  return (
    <>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Unfollow Modal
      </Button>

      <Modal open={open} onClose={handleClose}>
        <ModalContainer>
          <ModalContent>
            <Typography variant="h6" padding={"15px 15px 0 15px"}>
              Unfollow {userTag}?
            </Typography>
            <Typography padding={"15px 15px 0 15px"}>
              Their posts will no longer show up in your For You timeline. You can still
              view their profile unless their posts are protected.
            </Typography>
            <ButtonContainer>
              <ButtonUnfollow
                variant="contained"
                color="primary"
                onClick={handleUnfollow}>
                Unfollow
              </ButtonUnfollow>
              <ButtonCancell variant="contained" color="secondary" onClick={handleClose}>
                Cancel
              </ButtonCancell>
            </ButtonContainer>
          </ModalContent>
        </ModalContainer>
      </Modal>
    </>
  );
};
