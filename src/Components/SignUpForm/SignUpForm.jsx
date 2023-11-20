import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { ReactComponent as TwiterLogo } from "../../Pages/ExitLogin/svg/twiterLogo.svg";
import { ReactComponent as Apple } from "../../Pages/ExitLogin/svg/apple.svg";
import { ReactComponent as Google } from "../../Pages/ExitLogin/svg/google.svg";
import { ReactComponent as CloseButton } from "../LoginFormsModal/svg/Clos.svg";
import { object, string } from "yup";

import Button from "../Button/Button";

import { useNavigate } from "react-router";
import styles from "./SignUpForm.module.scss";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "23%",
  height: "80%",

  bgcolor: "background.paper",
  border: 0,
  boxShadow: 24,
  p: 4,
  padding: "10px 150px",
  borderRadius: "15px",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  flexDirection: "column",
  minHeight: "650px",
};

const SignUpForm = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const schema = object().shape({
    email: string().required("Email is required").email("Email is not valid"),
  });

  const onSubmit = (values) => {
    console.log(values);

    handleClose();
  };

  useEffect(() => {
    handleOpen();
  }, []);

  const navigate = useNavigate();

  const handleButtonClick = () => {
    setOpen(false); // Close the current modal
    navigate("/registration");
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <button className={styles.closeBtn} onClick={handleClose}>
            <CloseButton style={{ height: "30px" }} />
          </button>
          <div className={styles.twitterLogo}>
            <TwiterLogo />
          </div>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{
              fontSize: 30,
              forntWeight: 700,
            }}>
            Join X today
          </Typography>
          <Button
            className={styles.signUpBtn}
            style={{
              flexDirection: "row-reverse",
              fontSize: 15,

              marginLeft: 0,
            }}
            endIcon={<Google />}>
            Sign up with Google
          </Button>
          <Button
            className={styles.signUpBtn}
            style={{
              fontSize: 15,

              marginLeft: 0,
            }}
            startIcon={<Apple />}>
            Sign up with Apple
          </Button>
          <span className={styles.separator}>or</span>

          <Button
            onClick={handleButtonClick}
            sx={{
              fontSize: 15,
              fontWeight: 700,
              width: 320,
              color: "white",
              marginBottom: 2,
              backgroundColor: "rgb(0, 0, 0)",
              marginLeft: 0,
              "&:hover": { backgroundColor: "rgb(60, 58, 58)" },
            }}>
            Create account
          </Button>
          <Typography
            sx={{
              color: "#536471",
              marginBottom: 5,
            }}>
            By signing up, you agree to the Terms of Service and Privacy Policy, including
            Cookie Use.
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{
              fontSize: 15,
              fontWeight: 500,

              color: "#536471",
            }}>
            Have an account already?{" "}
            <Link
              href="/login" // actual URL or route to  "Sign Up" page
              color="primary">
              Log in
            </Link>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};
export default SignUpForm;
