import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Formik, Field } from "formik";
import * as Yup from "yup";
import { Button } from "..";
import { TwitterIcon, Cross } from "@/icons";
import styles from "./PasswordFormModal.module.scss";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "30%",
  height: "80%",
  bgcolor: "background.paper",
  border: "0",
  boxShadow: 24,
  p: 4,
  padding: "10px 80px",
  borderRadius: "15px",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  flexDirection: "column",
  minHeight: "650px",
};

export const PasswordFormModal = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [open2, setOpen2] = useState(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);

  const initialValues = {
    inputValue: "",
  };
  const initialValue2 = {
    password: "",
    email: "",
  };
  const [email, setEmail] = useState("");

  const validationSchema2 = Yup.object({
    password: Yup.string().required("Required"),
  });

  const onSubmit = (values) => {
    console.log(values);
    setEmail(values.inputValue);
    handleClose();
    handleOpen2();
  };

  const validationSchema = Yup.object().shape({
    inputValue: Yup.string()
      .required("This field is required")
      .test("phone-or-username", "Enter phone number or name", (value) => {
        const phoneRegex = /^\+\d{1,3}[- ]?\d{6,}$/;
        const usernameRegex = /^[a-zA-Z\s]+$/;
        return phoneRegex.test(value) || usernameRegex.test(value);
      }),
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    handleOpen();
  }, []);

  const navigate = useNavigate();

  const handleLoginClick = () => {
    // Handle your login logic here
    // If login is successful, navigate to the Main component
    // You can conditionally navigate based on login success or other conditions
    navigate("/");
  };

  const handleForgotPasswordClick = () => {
    setOpen(false);
    navigate("/forgotPasswordForm");
  };
  const handleSignUpClick = () => {
    setOpen(false);
    navigate("/signUpForm");
  };
  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <button className={styles.closeBtn} onClick={handleClose}>
            <Cross size={30} />
          </button>
          <div className={styles.twitterLogo}>
            <TwitterIcon size={30} />
          </div>

          <div className={styles.textContainer}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Enter your phone number or username
            </Typography>
            <Typography
              id="modal-modal-description"
              sx={{
                mt: 2,
                color: "#536471",
              }}>
              There was unusual login activity on your account. To help keep your account
              safe, please enter your phone number or username to verify it’s you.
            </Typography>
          </div>
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}>
            {({ errors, touched, isValid, submitForm }) => (
              <Form className={styles.form}>
                <Field
                  className={styles.textField}
                  as={TextField}
                  name="inputValue"
                  label="Phone or username"
                  placeholder="Phone or username"
                  variant="outlined"
                  fullWidth
                  required
                  error={touched.inputValue && Boolean(errors.inputValue)}
                  helperText={touched.inputValue && errors.inputValue}
                  sx={{
                    marginBottom: "285px",
                  }}></Field>
                <Button
                  onClick={(e) => {
                    e.preventDefault();
                    if (isValid) {
                      submitForm();
                    }
                  }}
                  type="submit"
                  disabled={!isValid}
                  sx={{
                    backgroundColor: "#000000",
                    color: "#FFFFFF",
                    padding: "0 32px",
                    width: "100%",
                    height: "4rem",
                    margin: "0",
                    "&:hover": {
                      backgroundColor: "#0f1419",
                    },
                    "&:disabled": {
                      backgroundColor: "#6d6d6d",
                      color: "#ffffff",
                      cursor: "not-allowed",
                    },
                  }}>
                  Next
                </Button>
              </Form>
            )}
          </Formik>
        </Box>
      </Modal>

      <Modal open={open2} onClose={handleClose2}>
        <Box sx={style}>
          <button className={styles.closeBtn} onClick={handleClose2}>
            <Cross size={30} />
          </button>
          <div className={styles.twitterLogo}>
            <TwitterIcon size={30} />
          </div>
          <div className={styles.textContainer}>
            <Typography id="modal-modal-title2" variant="h6" component="h2">
              Enter your password
            </Typography>
          </div>
          <Formik
            initialValues={initialValue2}
            onSubmit={onSubmit}
            validationSchema={validationSchema2}>
            {({ errors, touched, isValid }) => (
              <Form className={styles.form}>
                <TextField
                  className={styles.textField}
                  label="Email"
                  value={email}
                  variant="outlined"
                  fullWidth
                  disabled
                  sx={{
                    marginBottom: "20px",
                  }}></TextField>
                <Field
                  className={styles.textField}
                  as={TextField}
                  id="outlined-password-input"
                  autoComplete="current-password"
                  name="password"
                  label="Password"
                  placeholder="Password"
                  variant="outlined"
                  type={showPassword ? "text" : "password"}
                  fullWidth
                  required
                  error={touched.password && Boolean(errors.password)}
                  helperText={touched.password && errors.password}
                  sx={{ marginBottom: "20px" }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={handleTogglePasswordVisibility} edge="end">
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}></Field>
                <Typography
                  sx={{
                    marginBottom: "230px",
                  }}>
                  <Link
                    className={styles.link}
                    color="primary"
                    onClick={handleForgotPasswordClick}>
                    Forgot password?
                  </Link>
                </Typography>
                <Button
                  type="submit"
                  onClick={handleLoginClick}
                  disabled={!isValid}
                  sx={{
                    backgroundColor: "#000000",
                    color: "#FFFFFF",
                    padding: "0 32px",
                    width: "100%",
                    height: "4rem",
                    margin: "0",
                    "&:hover": {
                      backgroundColor: "#0f1419",
                    },
                    "&:disabled": {
                      backgroundColor: "#6d6d6d",
                      color: "#ffffff",
                      cursor: "not-allowed",
                    },
                  }}>
                  Log in
                </Button>
              </Form>
            )}
          </Formik>
          <div>
            <Typography
              id="modal-modal-title2"
              variant="body2"
              sx={{
                mt: 2,
                color: "#536471",
              }}>
              Don&apos;t have an account?{" "}
              <Link
                className={styles.link}
                href="/signUpForm"
                color="primary"
                onClick={handleSignUpClick}>
                Sign Up
              </Link>
            </Typography>
          </div>
        </Box>
      </Modal>
    </div>
  );
};
