import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Form, Formik } from "formik";
import Input from "../Input/Input";
import { ReactComponent as TwiterLogo } from "../../Pages/ExitLogin/svg/twiterLogo.svg";
import { ReactComponent as Apple } from "../../Pages/ExitLogin/svg/apple.svg";
import { ReactComponent as Google } from "../../Pages/ExitLogin/svg/google.svg";
import { ReactComponent as CloseButton } from "../LoginFormsModal/svg/Clos.svg";
import { object, string } from "yup";

import classNames from "classnames";

import Button from "../Button/Button";
import { useSelector, useDispatch } from "react-redux";
import { setModal } from "../../redux/actions/modalLogin";

import { useNavigate } from "react-router";


const style = {
  position: "absolute",
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  gap: "20px",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: " 30%",
  height: "80%",
  bgcolor: "background.paper",
  borderRadius: 6,
  boxShadow: 24,
  p: 10,
};


const SignUpForm = () => {const [open, setOpen] = useState(true);
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
  setOpen(true); // Open the modal when the component is mounted
}, []); // Empty dependency array means this effect runs once after the initial render

// const { open } = props;
const navigate = useNavigate();

const handleButtonClick = () => {
  setOpen(false); // Close the current modal
  navigate("/passwordForm");
};
  return (
    <div>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        // onClose={fonnClick}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div  onClick={toggleModal}>
            <CloseButton />
          </div>
          <div >
            <TwiterLogo />
          </div>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Join X today
          </Typography>
          <Button endIcon={<Google />}>Sign up with Google</Button>
          <Button startIcon={<Apple />}>Sign up with Apple</Button>
          <span >or</span>

          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={schema}
          >
            <Form>
              <Input
                name="email"
                type="email"
                label="email@"
                variant="email@"
              />
            </Form>
          </Formik>
          <Button
            onClick={handleButtonClick}
            sx={{
              color: "white",
              backgroundColor: "rgb(0, 0, 0)",
              "&:hover": { backgroundColor: "rgb(60, 58, 58)" },
            }}
          >
            Create account
          </Button>
          <Button>Forgot your password</Button>
          <Typography
            id="modal-modal-description"
            sx={{
              fontSize: "22px",
              fontWeight: 500,

              a: { color: "rgb(21, 17, 218)", textDecoration: "none" },
              " &:hover": {
                textDecoration: "underline",
              },
            }}
          >
            Have an account already?{" "}
            <Link
              
              href="/LoginPage" // actual URL or route to  "Sign Up" page
              color="primary"
            >
              Log in
            </Link>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};
export default SignUpForm;
