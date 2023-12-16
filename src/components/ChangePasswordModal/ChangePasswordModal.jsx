import { Modal, Typography, Stack } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { ChangePasswordForm } from "@/forms/ChangePasswordForm/ChangePasswordForm";
import { closeChangePasswordModal } from "@/redux/slices/appSlice";
import {
  changePasswordModalContainerSX,
  changePasswordModalSX,
  formContainerSX,
  modalTitleSX,
} from "./styleSX";

export const ChangePasswordModal = () => {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.app.isChangePasswordModalActive);

  const handleClose = () => {
    dispatch(closeChangePasswordModal());
  };

  return (
    <Modal open={open} onClose={handleClose} sx={changePasswordModalContainerSX}>
      <Stack sx={changePasswordModalSX}>
        <Typography sx={modalTitleSX} variant="h6">
          Change your password
        </Typography>
        <Stack sx={formContainerSX}>
          <ChangePasswordForm onClose={handleClose} />
        </Stack>
      </Stack>
    </Modal>
  );
};
