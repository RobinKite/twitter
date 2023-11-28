import { useState, useEffect } from "react";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Cross, Twitter } from "@/icons";
import { ForgotPasswordForm as Form } from "@/forms";
import styles from "./ForgotPasswordForm.module.scss";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "30%",
  height: "80%",
  bgcolor: "background.paper",
  border: "0",
  boxShadow: 24,
  p: 4,
  padding: "10px 80px",
  borderRadius: "15px",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  flexDirection: "column",
  minHeight: "650px",
};

export const ForgotPasswordForm = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    handleOpen();
  }, []);

  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <button className={styles.closeBtn} onClick={handleClose}>
            <Cross size={30} />
          </button>
          <div className={styles.twitterLogo}>
            <Twitter size={32} />
          </div>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{
              fontSize: 30,
              fontWeighta: 700,
            }}>
            Find your X account
          </Typography>

          <Typography
            id="modal-modal-description"
            sx={{
              mt: 2,
              color: "#536471",
              fontSize: 15,
              marginBottom: 5,
            }}>
            Enter the email, phone number, or username associated with your account to
            change your password.
          </Typography>
          <Form handleClose={handleClose} />
        </Box>
      </Modal>
    </div>
  );
};
