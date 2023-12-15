import { Modal, Typography, Stack } from "@mui/material";
import PropTypes from "prop-types";
import { ChangePasswordForm } from "@/forms/ChangePasswordForm/ChangePasswordForm";
import {
  changePasswordModalContainerSX,
  changePasswordModalSX,
  formContainerSX,
  modalTitleSX,
} from "./styleSX";

export const ChangePasswordModal = ({ open, onClose }) => {
  return (
    <Modal open={open} onClose={onClose} sx={changePasswordModalContainerSX}>
      <Stack sx={changePasswordModalSX}>
        <Typography sx={modalTitleSX} variant="h6">
          Change your password
        </Typography>
        <Stack sx={formContainerSX}>
          <ChangePasswordForm onClose={onClose} />
        </Stack>
      </Stack>
    </Modal>
  );
};

ChangePasswordModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
