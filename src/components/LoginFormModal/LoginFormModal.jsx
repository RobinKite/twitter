import { Stack, Modal, Link, Typography } from "@mui/material";
import { useNavigate } from "react-router";
// import { Form, Formik } from "formik";
// import { object, string } from "yup";
// import { Input } from "@/components";
import { LoginForm } from "../../forms";
import { Google } from "@/icons";
import PropTypes from "prop-types";
import {
  CloseButton,
  Container,
  LinesSpan,
  LoginFormStyled,
  LoginTitle,
  MainButton,
  // NextButton,
} from "./styleSX";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";
import { BsTwitterX } from "react-icons/bs";
// import { useDispatch } from "react-redux";
// import { loginUser } from "@/redux/slices/userSlice";
// import { setModal } from "@/redux/slices/appSlice";
// import { useState } from "react";

export function LoginFormModal({ handleLoginModalClose, handleLoginModalOpen }) {
  const navigate = useNavigate();

  const handleForgotPasswordClick = () => {
    navigate("/forgotPasswordForm");
  };

  return (
    <Modal open={handleLoginModalOpen} onClose={handleLoginModalClose}>
      <Container>
        <CloseButton onClick={handleLoginModalClose}>
          <CloseSharpIcon size={30} />
        </CloseButton>
        <Stack>
          <BsTwitterX size={28} />
        </Stack>
        <LoginFormStyled>
          <LoginTitle component="h2">Sign in to X</LoginTitle>
          <MainButton endIcon={<Google size={22} />}>Sign in with Google</MainButton>
          <LinesSpan>or</LinesSpan>
          <Stack sx={{ width: "100%" }}>
            <LoginForm />
          </Stack>
          <MainButton onClick={handleForgotPasswordClick}>Forgot password?</MainButton>
          <Typography
            id="modal-modal-description"
            sx={{
              fontSize: "15px",
              color: "#71767b",
              marginTop: "40px",
            }}>
            Don&apos;t have an account?&#32;
            <Link
              href="/SignUpForm" // actual URL or route to  "Sign Up" page
              color="primary"
              sx={{
                color: "#1d9bf0",
                textDecoration: "none",
                " &:hover": {
                  textDecoration: "underline",
                },
              }}>
              Sign Up
            </Link>
          </Typography>
        </LoginFormStyled>
      </Container>
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
