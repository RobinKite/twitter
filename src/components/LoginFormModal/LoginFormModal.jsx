import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { Form, Formik } from "formik";
import { object, string } from "yup";
import { Button, Input } from "../../components";
import { setModal } from "../../redux/slices/appSlice";
import TwiterLogo from "../../assets/icons/twiterLogo.svg?react";
import Apple from "../../assets/icons/apple.svg?react";
import Google from "../../assets/icons/google.svg?react";
import Close from "../../assets/icons/close.svg?react";
import styles from "./LoginFormModal.module.scss";

const style = {
  position: "absolute",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  top: "50%",
  left: "50%",
  alignItems: "center",
  transform: "translate(-50%, -50%)",
  width: " 560px",
  height: "85%",
  bgcolor: "background.paper",
  borderRadius: 6,
  boxShadow: 24,
  p: " 20px 20px 130px ",

  // "@media (max-width: 700px)": {
  //   width: " 100%",
  //   height: "80%",
  //   // pt:"50px",
  // },
};

export function LoginFormModal() {
  const [open, setOpen] = useState(true);
  const schema = object().shape({
    email: string().required("Email is required").email("Email is not valid"),
  });
  const initialValues = {
    email: "",
  };
  const onSubmit = (values) => {
    console.log(values);
  };

  const dispatch = useDispatch();
  const toggleModal = () => {
    dispatch(setModal());
  };

  // const fonnClick = (event) => {
  //   // Перевіряємо, чи клік був здійснений за межами модального вікна
  //   if (event.currentTarget === event.target) {
  //     //Якщо так, то додаємо код для закриття модального вікна
  //     toggleModal();
  //   }
  // };

  useEffect(() => {
    setOpen(true);
  }, []);

  const navigate = useNavigate();

  const handleButtonClick = () => {
    setOpen(false);
    navigate("/passwordForm");
  };
  const handleForgotPasswordClick = () => {
    navigate("/forgotPasswordForm");
    setOpen(false);
  };
  return (
    <div>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box sx={style}>
          <div className={styles.container}>
            <div className={styles.clossvg} onClick={toggleModal}>
              <Close />
            </div>
            <div className={styles.svgX}>
              <TwiterLogo />
            </div>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Sign in to X
            </Typography>
            <Button
              endIcon={<Google />}
              sx={{
                width: "60%",
              }}>
              Sign in with Google
            </Button>
            <Button
              startIcon={<Apple />}
              sx={{
                width: "60%",
              }}>
              Sign in with Apple
            </Button>
            <span className={styles.retreat}>or</span>
            <div className={styles.conteinerForm}>
              <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={schema}>
                <Form>
                  <Input name="email" type="email" label="email@" variant="email@" />
                </Form>
              </Formik>
            </div>
            <Button
              onClick={handleButtonClick}
              sx={{
                width: "60%",
                color: "white",
                backgroundColor: "rgb(0, 0, 0)",
                "&:hover": { backgroundColor: "rgb(60, 58, 58)" },
              }}>
              Next
            </Button>
            <Button
              sx={{
                width: "60%",
                mt: "10px",
              }}
              onClick={handleForgotPasswordClick}>
              Forgot your password
            </Button>
            <Typography
              id="modal-modal-description"
              sx={{
                fontSize: "15px",
                fontWeight: 500,
                marginTop: "20px",
                a: { color: "rgb(21, 17, 218)", textDecoration: "none" },
                " &:hover": {
                  textDecoration: "underline",
                },
              }}>
              Dont have an account?{" "}
              <Link
                href="/SignUpForm" // actual URL or route to  "Sign Up" page
                color="primary">
                Sign Up
              </Link>
            </Typography>
          </div>
          {/* </BoxStyled> */}
        </Box>
      </Modal>
    </div>
  );
}
