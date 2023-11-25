import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
// import { object, string } from "yup";
import { Button } from "../../components";
import { Twitter, Apple, Cross, Google } from "@/icons";
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

export const SignUpForm = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // TODO: Move to separate schema file
  // const schema = object().shape({
  //   email: string().required("Email is required").email("Email is not valid"),
  // });

  // const onSubmit = (values) => {
  //   console.log(values);

  //   handleClose();
  // };

  useEffect(() => {
    handleOpen();
  }, []);

  const navigate = useNavigate();

  const handleButtonClick = () => {
    setOpen(false);
    navigate("/registration");
  };

  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <button className={styles.closeBtn} onClick={handleClose}>
            <Cross size={30} />
          </button>
          <div className={styles.twitterLogo}>
            <Twitter />
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
            <Link href="/login" color="primary">
              Log in
            </Link>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};
