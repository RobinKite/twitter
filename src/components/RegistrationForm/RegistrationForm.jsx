import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Form, Formik, Field } from "formik";
import * as Yup from "yup";
// import { setCreateProfileModal } from "../../redux/slices/appSlice";
import styles from "./RegistrationForm.module.scss";
import { CloseButton, FormBox, FormTitle, SubmitButton } from "./styleSX";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";
import { registerUser } from "@/redux/slices/userSlice";
import PropTypes from "prop-types";
import { CustomDateSelector } from "..";

export const RegistrationForm = ({ handleRegModalClose, handleRegModalOpen }) => {
  // const isProfileModalActive = useSelector((state) => state.app.isProfileModalActive);
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
    day: "",
    month: "",
    year: "",
  };

  const onSubmit = (values, actions) => {
    dispatch(registerUser(values));
    console.log(values);
    actions.resetForm();
  };
  const validationSchema = Yup.object({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    userName: Yup.string().required("User name is required"),
    email: Yup.string().required("Email is required").email("Invalid email"),
    password: Yup.string().required("Password is required"),
    day: Yup.string(),
    month: Yup.string(),
    year: Yup.string(),
  });

  const [registrationData, setRegistrationData] = useState(initialValues);

  const handleRegistrationDataChange = (newData) => {
    setRegistrationData(newData);
  };

  return (
    <Modal open={handleRegModalOpen} onClose={handleRegModalClose}>
      <FormBox>
        <CloseButton onClick={handleRegModalClose}>
          <CloseSharpIcon />
        </CloseButton>
        <FormTitle variant="h2">Create your account</FormTitle>
        <Formik
          data={registrationData}
          onDataChange={handleRegistrationDataChange}
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}>
          {({ errors, touched, isValid }) => (
            <Form>
              <Field
                as={TextField}
                name="firstName"
                label="First name"
                placeholder="First name"
                variant="outlined"
                fullWidth
                required
                error={touched.firstName && Boolean(errors.firstName)}
                helperText={touched.firstName && errors.firstName}
                sx={{
                  marginBottom: "20px",
                }}
              />
              <Field
                as={TextField}
                name="lastName"
                label="Last name"
                placeholder="Last name"
                variant="outlined"
                fullWidth
                required
                error={touched.lastName && Boolean(errors.lastName)}
                helperText={touched.lastName && errors.lastName}
                sx={{
                  marginBottom: "20px",
                }}
              />
              <Field
                as={TextField}
                name="userName"
                label="User name"
                placeholder="User name"
                variant="outlined"
                fullWidth
                required
                error={touched.firstName && Boolean(errors.firstName)}
                helperText={touched.firstName && errors.firstName}
                sx={{
                  marginBottom: "20px",
                }}
              />
              <Field
                as={TextField}
                name="email"
                label="Email"
                placeholder="Email"
                variant="outlined"
                fullWidth
                required
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
                sx={{
                  marginBottom: "20px",
                }}
              />
              <Field
                as={TextField}
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
                  marginBottom: "20px",
                }}
              />
              <CustomDateSelector
                monthId="month"
                dayId="day"
                yearId="year"
                dayLabel="Day"
                monthLabel="Month"
                yearLabel="Year"
                required={true}
              />
              <SubmitButton //роут, куда ведет кнопка некст??????
                type="submit"
                // onClick={onRegFormSubmit}
                disabled={!isValid}>
                Sign up
              </SubmitButton>
            </Form>
          )}
        </Formik>
      </FormBox>
    </Modal>
  );
};

RegistrationForm.propTypes = {
  handleRegModalOpen: PropTypes.bool,
  handleRegModalClose: PropTypes.func,
};

RegistrationForm.defaultProps = {
  handleRegModalOpen: false,
  handleRegModalClose: () => {},
};
