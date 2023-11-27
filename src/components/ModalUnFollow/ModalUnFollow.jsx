import { Dialog, Stack, Typography } from "@mui/material";
import PropTypes from "prop-types";
import {
  ButtonCancell,
  ButtonContainer,
  ButtonUnfollow,
  ModalContainerSX,
  ModalContent,
} from "./styleSX";

export const ModalUnFollow = ({ userTag, onClose, showModal, handleUnfollow }) => {
  const handleConfirmUnsubscription = () => {
    handleUnfollow();
    onClose();
  };

  return (
    <Dialog
      onClose={onClose}
      open={showModal}
      sx={ModalContainerSX}
      aria-labelledby="modal for confirm unsubscription">
      <Stack sx={ModalContent}>
        <Typography variant="h6" sx={{ marginBottom: "8px", fontSize: "20px" }}>
          Unfollow {userTag}?
        </Typography>
        <Typography sx={{ fontSize: "15px" }}>
          Their posts will no longer show up in your For You timeline. You can still view
          their profile unless their posts are protected.
        </Typography>
        <ButtonContainer>
          <ButtonUnfollow
            variant="contained"
            color="primary"
            onClick={handleConfirmUnsubscription}>
            Unfollow
          </ButtonUnfollow>
          <ButtonCancell variant="contained" color="secondary" onClick={onClose}>
            Cancel
          </ButtonCancell>
        </ButtonContainer>
      </Stack>
    </Dialog>
  );
};

ModalUnFollow.propTypes = {
  userTag: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  showModal: PropTypes.bool.isRequired,
  handleUnfollow: PropTypes.func.isRequired,
};
