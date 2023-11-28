import TextField from "@mui/material/TextField";
import { Form, Formik, Field } from "formik";
import { forgotPasswordSchema } from "@/schemas";
import { Button } from "@/components";
import PropTypes from "prop-types";
import styles from "./ForgotPasswordForm.module.scss";

export const ForgotPasswordForm = ({ handleClose }) => {
  const onSubmit = (values) => {
    console.log(values);

    handleClose();
    // Open the second modal onSubmit
  };

  const initialValues = {
    inputValue: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={forgotPasswordSchema}>
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
  );
};

ForgotPasswordForm.propTypes = {
  handleClose: PropTypes.func.isRequired,
};
