import { useState, useEffect } from "react";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { Form, Formik, Field } from "formik";
import * as Yup from "yup";
import { Button } from "../../components";
import TwiterLogo from "../../assets/icons/twiterLogo.svg?react";
import CloseButton from "../../assets/icons/close.svg?react";
import styles from "./ForgotPasswordForm.module.scss";

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

export const ForgotPasswordForm = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // Automatically open the modal when the component is mounted
  useEffect(() => {
    handleOpen();
  }, []);

  const onSubmit = (values) => {
    console.log(values);

    handleClose();
    // Open the second modal onSubmit
  };

  const initialValues = {
    inputValue: "",
  };

  const validationSchema = Yup.object().shape({
    inputValue: Yup.string()
      .required("This field is required")
      .test(
        "phone-or-username-or-email",
        "Enter a valid phone number, username, or email",
        (value) => {
          const phoneRegex = /^\+\d{1,3}[- ]?\d{6,}$/;
          const usernameRegex = /^[a-zA-Z\s]+$/;
          const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;

          // Test if the value matches any of the allowed formats
          return (
            phoneRegex.test(value) || usernameRegex.test(value) || emailRegex.test(value)
          );
        },
      ),
  });

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <button className={styles.closeBtn} onClick={handleClose}>
            <CloseButton style={{ height: "30px" }} />
          </button>
          <div className={styles.twitterLogo}>
            <TwiterLogo />
          </div>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{
              fontSize: 30,
              fontWeighta: 700,
            }}>
            Find your X account
          </Typography>

          <Typography
            id="modal-modal-description"
            sx={{
              mt: 2,
              color: "#536471",
              fontSize: 15,
              marginBottom: 5,
            }}>
            Enter the email, phone number, or username associated with your account to
            change your password.
          </Typography>

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
                  label="Email, phone number or username"
                  placeholder="Email, phone number or username"
                  variant="outlined"
                  fullWidth
                  required
                  error={touched.inputValue && Boolean(errors.inputValue)}
                  helperText={touched.inputValue && errors.inputValue}></Field>
                <Button
                  type="submit"
                  onClick={submitForm}
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
    </div>
  );
};
