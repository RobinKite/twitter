import { Stack, Modal } from "@mui/material";
import { LoginForm } from "../../forms";
import { Google } from "@/icons";
import PropTypes from "prop-types";
import {
  CloseButtonSX,
  ContainerSX,
  LinesSpanSX,
  LinkSX,
  LoginFormSX,
  LoginTextSX,
  LoginTitleSX,
  MainButtonSX,
} from "./styleSX";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";
import { BsTwitterX } from "react-icons/bs";
// import { useDispatch } from "react-redux";
// import { loginUser } from "@/redux/slices/userSlice";
// import { setModal } from "@/redux/slices/appSlice";
// import { useState } from "react";

export function LoginFormModal({ handleLoginModalClose, handleLoginModalOpen }) {
  const handleForgotPasswordClick = () => {
    //TODO: Change next line to dispatch password reset modal
    // navigate("/password_reset");
  };

  //TODO: close Login modal and open Registration modal upon pressing Sign Up

  return (
    <Modal open={handleLoginModalOpen} onClose={handleLoginModalClose}>
      <ContainerSX>
        <CloseButtonSX onClick={handleLoginModalClose}>
          <CloseSharpIcon size={30} />
        </CloseButtonSX>
        <Stack>
          <BsTwitterX size={28} />
        </Stack>
        <LoginFormSX>
          <LoginTitleSX component="h2">Sign in to X</LoginTitleSX>
          <MainButtonSX endIcon={<Google size={22} />}>Sign in with Google</MainButtonSX>
          <LinesSpanSX>or</LinesSpanSX>
          <Stack sx={{ width: "100%" }}>
            <LoginForm />
          </Stack>
          <MainButtonSX onClick={handleForgotPasswordClick}>
            Forgot password?
          </MainButtonSX>
          <LoginTextSX>
            Don&apos;t have an account?&#32;
            <LinkSX>Sign Up</LinkSX>
          </LoginTextSX>
        </LoginFormSX>
      </ContainerSX>
    </Modal>
  );
}

LoginFormModal.propTypes = {
  handleLoginModalOpen: PropTypes.bool,
  handleLoginModalClose: PropTypes.func,
};

LoginFormModal.defaultProps = {
  handleLoginModalOpen: false,
  handleLoginModalClose: () => {},
};
