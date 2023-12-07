import { Modal, Typography, TextField, Button, Stack } from "@mui/material";
import { useState } from "react";
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

export const ChangePasswordModal = ({ open, onClose }) => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleChangePassword = async () => {
    if (newPassword === confirmPassword && newPassword.length >= 4) {
      const token = localStorage.getItem("refreshToken");
      const response = await fetch(
        "https://danit-final-twitter-8f32e99a3dec.herokuapp.com/users/change-password",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            current_password: currentPassword,
            new_password: newPassword,
          }),
        },
      );
      const data = await response.text();
      console.log(data);
      onClose();
    } else {
      console.error(
        "Passwords do not match or are less than 4 characters(new password must be at least 4 characters)",
      );
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
          onChange={(e) => setCurrentPassword(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          sx={inputFieldSX}
          label="New password"
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          sx={inputFieldSX}
          label="Confirm password"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
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
