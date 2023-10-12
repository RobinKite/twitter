import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Button from "../Button/Button";
import styles from "./RegistrationForm.module.scss";
import TextField from "@mui/material/TextField";
import { Form, Formik, Field } from "formik";
import { ReactComponent as CloseButton } from "../LoginFormsModal/svg/Clos.svg";
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
  justifyContent: "center",
  alignItems: "flex-start",
  flexDirection: "column",

  minHeight: "650px",
};
const RegistrationForm = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };

  const onSubmit = (values) => {
    console.log(values);
    handleClose();
    handleOpen(); // Open the second modal onSubmit
  };
  const validationSchema = Yup.object({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string().required("Email is required").email("Invalid email"),
    password: Yup.string().required("Password is required"),
  });

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
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
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{
              marginBottom: "50px",
              fontSize: "30px",
              fontWeight: "700",
            }}
          >
            Create your account
          </Typography>
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          >
            {({ errors, touched }) => (
              <Form>
                <Field
                  className={styles.textField}
                  as={TextField}
                  // id='outlined-basic'
                  name="firstName"
                  label="First name"
                  placeholder="First name"
                  variant="outlined"
                  fullWidth
                  required
                  error={touched.firstName && Boolean(errors.firstName)}
                  helperText={touched.firstName && errors.firstName}
                  sx={{
                    marginBottom: "35px",
                  }}
                ></Field>
                <Field
                  className={styles.textField}
                  as={TextField}
                  // id='outlined-basic'
                  name="lastName"
                  label="Last name"
                  placeholder="Last name"
                  variant="outlined"
                  fullWidth
                  required
                  error={touched.lastName && Boolean(errors.lastName)}
                  helperText={touched.lastName && errors.lastName}
                  sx={{
                    marginBottom: "35px",
                  }}
                ></Field>
                <Field
                  className={styles.textField}
                  as={TextField}
                  // id='outlined-basic'
                  name="email"
                  label="Email"
                  placeholder="Email"
                  variant="outlined"
                  fullWidth
                  required
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                  sx={{
                    marginBottom: "35px",
                  }}
                ></Field>
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
                  error={touched.password && Boolean(errors.password)} // Corrected field names here
                  helperText={touched.password && errors.password} // Corrected field names here
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={handleTogglePasswordVisibility}
                          edge="end"
                          aria-label="toggle password visibility"
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    marginBottom: "35px",
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
                    marginTop: "40px",
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
};
export default RegistrationForm;