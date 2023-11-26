import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Form, Formik, Field } from "formik";
import { setCreateProfileModal } from "@/redux/slices/appSlice";
import { Button } from "@/components";
import { registrationFormSchema } from "@/schemas";
import styles from "./RegistrationForm.module.scss";

export const RegistrationForm = () => {
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
    dispatch(setCreateProfileModal());
    // handleClose(setCreateProfileModal());
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
    <Formik
      data={registrationData}
      onDataChange={handleRegistrationDataChange}
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={registrationFormSchema}>
      {({ errors, touched, isValid, submitForm }) => (
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
            }}></Field>
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

          <Button //роут, куда ведет кнопка некст??????
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              if (isValid) {
                submitForm();
                navigate("/");
              }
            }}
            disabled={!isValid}
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
  );
};
