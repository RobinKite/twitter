import { Form, Formik } from "formik";
import { Input } from "@/components";
import { changePasswordSchema } from "@/schemas";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { Button, Stack, Typography } from "@mui/material";
import { changePassword } from "@/redux/slices/appSlice";
import {
  btnCancellSX,
  btnChangeSX,
  btnContainerSX,
  erroreMessageSX,
  inputFieldSX,
} from "./styleSX";

export const ChangePasswordForm = ({ onClose }) => {
  const dispatch = useDispatch();
  const passwordMessage = useSelector((state) => state.app.passwordMessage);

  const initialValues = {
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  };

  const onSubmit = (currentPassword, newPassword) => {
    console.log(currentPassword, newPassword);
    if (passwordMessage) onClose();
    dispatch(changePassword(currentPassword, newPassword));
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={changePasswordSchema}>
      <Form>
        <Input
          name="currentPassword"
          type="password"
          label="Current password"
          variant="password"
          sx={inputFieldSX}
        />
        <Input
          name="newPassword"
          type="password"
          label="New password"
          variant="password"
          sx={inputFieldSX}
        />
        <Input
          name="confirmPassword"
          type="password"
          label="Confirm password"
          variant="password"
          sx={inputFieldSX}
        />
        {passwordMessage && (
          <Typography sx={erroreMessageSX}>{passwordMessage}</Typography>
        )}
        <Stack sx={btnContainerSX}>
          <Button variant="outlined" sx={btnChangeSX} type="submit">
            Save
          </Button>
          <Button variant="outlined" sx={btnCancellSX} onClick={onClose}>
            Cancel
          </Button>
        </Stack>
      </Form>
    </Formik>
  );
};

ChangePasswordForm.propTypes = {
  onClose: PropTypes.func.isRequired,
};
