import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Form, Formik, Field } from "formik";
import Button from "../../Button/Button";
import { ReactComponent as TwiterLogo } from "../../../Pages/ExitLogin/svg/twiterLogo.svg";
import { ReactComponent as CloseButton } from "../svg/Clos.svg";
import styles from "./PasswordForm.module.scss";
import * as Yup from "yup";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "0",
  boxShadow: 24,
  p: 4,
  padding: "10px 80px",
  borderRadius: "15px",
  display: "flex",
  justifyContent: "flex-start",

  flexDirection: "column",
  alignItems: "center",
  minHeight: "650px",
};

const PasswordForm = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const initialValues = {
    inputValue: "",
  };
  const onSubmit = (values) => {
    console.log(values);
  };
  const validationSchema = Yup.object().shape({
    inputValue: Yup.string()
      .required("This field is required")
      .test("phone-or-username", "Invalid input", (value) => {
        // Define your custom validation logic here
        // You can use regular expressions or any other criteria
        const phoneRegex = /^\+\d{1,3}[- ]?\d{6,}$/;
        const usernameRegex = /^[a-zA-Z\s]+$/;

        return phoneRegex.test(value) || usernameRegex.test(value);
      }),
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
          <button className={styles.closeBtn}>
            <CloseButton />
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
                marginBottom: "30px",
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
              <Form>
                <Field
                  as={TextField}
                  id="outlined-basic"
                  name="inputValue"
                  label="Phone or username"
                  placeholder="Phone or username"
                  variant="outlined"
                  fullWidth
                  required
                  error={touched.inputValue && Boolean(errors.inputValue)}
                  helperText={touched.inputValue && errors.inputValue}
                  sx={{
                    marginBottom: "245px",
                  }}
                ></Field>
                <Button
                  type="submit"
                  sx={{
                    backgroundColor: "#000000",
                    color: "#FFFFFF",
                    padding: "0 32px",
                    width: "375px",
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

export default PasswordForm;
