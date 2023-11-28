import { Stack, Modal, Link, Typography } from "@mui/material";
import { useNavigate } from "react-router";
import { Form, Formik } from "formik";
import { object, string } from "yup";
import { Input } from "../../components";
import Google from "../../assets/icons/google.svg?react";
import PropTypes from "prop-types";
import {
  CloseButton,
  Container,
  LinesSpan,
  LoginForm,
  LoginTitle,
  MainButton,
  NextButton,
} from "./styleSX";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";
import { BsTwitterX } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { loginUser } from "@/redux/slices/userSlice";

export function LoginFormModal({ handleLoginModalClose, handleLoginModalOpen }) {
  const dispatch = useDispatch();
  const schema = object().shape({
    email: string().trim().required("Email is required").email("Email is not valid"),
    password: string().trim().min(4).max(20).required("Password is required"),
  });
  const initialValues = {
    email: "",
    password: "",
  };
  const onSubmit = (values) => {
    console.log(values);
    dispatch(loginUser(values.email, values.password));
  };

  const navigate = useNavigate();

  const handleForgotPasswordClick = () => {
    navigate("/forgotPasswordForm");
  };

  return (
    <Modal open={handleLoginModalOpen} onClose={handleLoginModalClose}>
      <Container>
        <CloseButton onClick={handleLoginModalClose}>
          <CloseSharpIcon />
        </CloseButton>
        <Stack>
          <BsTwitterX size={28} />
        </Stack>
        <LoginForm>
          <LoginTitle component="h2">Sign in to X</LoginTitle>
          <MainButton endIcon={<Google />}>Sign in with Google</MainButton>
          <LinesSpan>or</LinesSpan>
          <Stack sx={{ width: "100%" }}>
            <Formik
              initialValues={initialValues}
              onSubmit={onSubmit}
              validationSchema={schema}>
              <Form>
                <Input
                  name="email"
                  type="email"
                  label="email"
                  variant="email"
                  sx={{ marginBottom: "12px" }}
                />
                <Input
                  name="password"
                  type="password"
                  label="password"
                  variant="password"
                  sx={{ marginBottom: "12px" }}
                />
                <NextButton
                  // onClick={handleButtonClick}
                  type="submit">
                  Next
                </NextButton>
              </Form>
            </Formik>
          </Stack>
          <MainButton onClick={handleForgotPasswordClick}>
            Forgot your password
          </MainButton>
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
        </LoginForm>
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
