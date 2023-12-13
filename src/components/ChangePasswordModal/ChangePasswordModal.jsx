import { Modal, Typography, TextField, Button, Stack } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import {
  btnCancellSX,
  btnChangeSX,
  btnContainer,
  changePasswordModalContainerSX,
  changePasswordModalSX,
  inputFieldSX,
  modalTitleSX,
} from "./styleSX";

import {
  setCurrentPassword,
  setNewPassword,
  setConfirmPassword,
  resetPasswordFields,
  changePassword,
} from "../../redux/slices/userSlice";

export const ChangePasswordModal = ({ open, onClose }) => {
  const dispatch = useDispatch();
  const { currentPassword, newPassword, confirmPassword } = useSelector(
    (state) => state.user,
  );

  const handleChangePassword = async () => {
    if (newPassword === confirmPassword && newPassword.length >= 4) {
      dispatch(changePassword({ currentPassword, newPassword }));
      dispatch(resetPasswordFields());
      onClose();
    } else if (newPassword.length < 4) {
      console.error("new password must be at least 4 characters");
    } else if (newPassword !== confirmPassword) {
      console.error("New passwords do not match");
    } else {
      console.error("Incorrect current password");
    }
  };

  return (
    <Modal open={open} onClose={onClose} sx={changePasswordModalContainerSX}>
      <Stack sx={changePasswordModalSX}>
        <Typography sx={modalTitleSX} variant="h6">
          Change your password
        </Typography>
        <TextField
          sx={inputFieldSX}
          label="Current password"
          type="password"
          value={currentPassword}
          onChange={(e) => dispatch(setCurrentPassword(e.target.value))}
          fullWidth
          margin="normal"
        />
        <TextField
          sx={inputFieldSX}
          label="New password"
          type="password"
          value={newPassword}
          onChange={(e) => dispatch(setNewPassword(e.target.value))}
          fullWidth
          margin="normal"
        />
        <TextField
          sx={inputFieldSX}
          label="Confirm password"
          type="password"
          value={confirmPassword}
          onChange={(e) => dispatch(setConfirmPassword(e.target.value))}
          fullWidth
          margin="normal"
        />
        <Stack sx={btnContainer}>
          <Button variant="outlined" sx={btnChangeSX} onClick={handleChangePassword}>
            Save
          </Button>
          <Button variant="outlined" sx={btnCancellSX} onClick={onClose}>
            Cancel
          </Button>
        </Stack>
      </Stack>
    </Modal>
  );
};

ChangePasswordModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
