import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useSelector, useDispatch } from "react-redux";
import { Cross } from "@/icons";
import { RegistrationForm as Form } from "@/forms";
import { setCreateProfileModal } from "@/redux/slices/appSlice";
import styles from "./RegistrationForm.module.scss";

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
  justifyContent: "center",
  alignItems: "flex-start",
  flexDirection: "column",
  minHeight: "650px",
};

export const RegistrationForm = () => {
  const isProfileModalActive = useSelector((state) => state.app.isProfileModalActive);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(setCreateProfileModal());
  };

  return (
    <div>
      <Modal open={isProfileModalActive} onClose={handleClose}>
        <Box sx={style}>
          <button className={styles.closeButton} onClick={handleClose}>
            <Cross size={30} />
          </button>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{
              marginBottom: "50px",
              fontSize: "30px",
              fontWeight: "700",
            }}>
            Create your account
          </Typography>
          <Form />
        </Box>
      </Modal>
    </div>
  );
};
