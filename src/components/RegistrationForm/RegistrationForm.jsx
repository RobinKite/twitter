import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Form, Formik, Field } from "formik";
import * as Yup from "yup";
import { setCreateProfileModal } from "../../redux/slices/appSlice";
import styles from "./RegistrationForm.module.scss";
import { CloseButton, FormBox, FormTitle, SubmitButton } from "./RagistrationFormStyles";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";

export const RegistrationForm = () => {
  const isProfileModalActive = useSelector((state) => state.app.isProfileModalActive);
  const dispatch = useDispatch();
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
    handleClose(setCreateProfileModal());
  };
  const validationSchema = Yup.object({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string().required("Email is required").email("Invalid email"),
    password: Yup.string().required("Password is required"),
  });

  const handleClose = () => {
    dispatch(setCreateProfileModal());
  };

  const navigate = useNavigate();
  // const handleNextButtonClick = () => {
  //   navigate("/signUpForm");
  // };

  const [registrationData, setRegistrationData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleRegistrationDataChange = (newData) => {
    setRegistrationData(newData);
  };

  return (
    <div>
      <Modal open={isProfileModalActive} onClose={handleClose}>
        <FormBox>
          <CloseButton onClick={handleClose}>
            <CloseSharpIcon />
          </CloseButton>
          <FormTitle variant="h2">Create your account</FormTitle>
          <Formik
            data={registrationData}
            onDataChange={handleRegistrationDataChange}
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}>
            {({ errors, touched, isValid, submitForm }) => (
              <Form>
                <Field
                  className={styles.textField}
                  as={TextField}
                  id="outlined-basic"
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
                  }}></Field>
                <Field
                  className={styles.textField}
                  as={TextField}
                  id="outlined-basic"
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
                  }}></Field>
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
                  }}></Field>
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
                        <IconButton onClick={handleTogglePasswordVisibility} edge="end">
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    marginBottom: "35px",
                  }}></Field>

                <SubmitButton //роут, куда ведет кнопка некст??????
                  type="submit"
                  onClick={(e) => {
                    e.preventDefault();
                    if (isValid) {
                      submitForm();
                      navigate("/");
                    }
                  }}
                  disabled={!isValid}>
                  Next
                </SubmitButton>
              </Form>
            )}
          </Formik>
        </FormBox>
      </Modal>
    </div>
  );
};
