
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Form, Formik, Field } from "formik";
import Button from "../Button/Button";
import { ReactComponent as TwiterLogo } from "../../Pages/ExitLogin/svg/twiterLogo.svg";
import { ReactComponent as CloseButton } from "../LoginFormsModal/svg/Clos.svg";
import styles from "./ForgotPassword.module.scss"
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";



const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 440,
  width: "80%",
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


const ForgotPasswordForm = () => {
const [open, setOpen] = useState(false);
const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  

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
    .test("phone-or-username", "Enter phone number or name", (value) => {
      // Define your custom validation logic here
      // You can use regular expressions or any other criteria
      const phoneRegex = /^\+\d{1,3}[- ]?\d{6,}$/;
      const usernameRegex = /^[a-zA-Z\s]+$/;

      return phoneRegex.test(value) || usernameRegex.test(value);
    }),
});

  
  const navigate = useNavigate();
   const handleClick = () => {
     // Handle your login logic here
     // If login is successful, navigate to the Main component
     // You can conditionally navigate based on login success or other conditions
     navigate("/forgotPasswordForm");
   };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <button className={styles.closeBtn} onClick={handleClose}>
            <CloseButton style={{ height: "30px" }} />
          </button>
          <div className={styles.twitterLogo}>
            <TwiterLogo />
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
              }}
            >
              There was unusual login activity on your account. To help keep
              your account safe, please enter your phone number or username to
              verify it’s you.
            </Typography>
          </div>
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          >
            {({ errors, touched }) => (
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
                  }}
                ></Field>
                <Button
                  type="submit"
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
                  }}
                >
                  Next
                </Button>
              </Form>
            )}
          </Formik>
        </Box>
      </Modal>
    </div>
  );
}
export default ForgotPasswordForm