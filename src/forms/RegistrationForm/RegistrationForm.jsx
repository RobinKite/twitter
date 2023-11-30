import { CustomDateSelector } from "@/components";
import { validationSchema } from "@/schemas";
import { SubmitButtonSX } from "@/components/RegistrationFormModal/styleSX";
import { TextField, IconButton, InputAdornment } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Form, Formik, Field } from "formik";
// import { setCreateProfileModal } from "../../redux/slices/appSlice";
// import { CloseButton, FormBox, FormTitle, SubmitButton } from "./styleSX";
import { registerUser } from "@/redux/slices/userSlice";

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
    day: "",
    month: "",
    year: "",
  };

  const onSubmit = (values, actions) => {
    dispatch(registerUser(values));
    console.log(values);
    actions.resetForm();
  };

  const [registrationData, setRegistrationData] = useState(initialValues);

  const handleRegistrationDataChange = (newData) => {
    setRegistrationData(newData);
  };

  return (
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
            error={touched.userName && Boolean(errors.userName)}
            helperText={touched.userName && errors.userName}
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
          <SubmitButtonSX type="submit" disabled={!isValid}>
            Sign up
          </SubmitButtonSX>
        </Form>
      )}
    </Formik>
  );
};
