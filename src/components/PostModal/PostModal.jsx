import { Modal, IconButton, Stack, useTheme } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { Cross } from "@/icons";
import { setModalPost } from "@/redux/slices/appSlice";
import { ModalBody } from "./styleSX";

export function PostModal({ isOpen }) {
  const dispatch = useDispatch();
  const content = useSelector((state) => state.app.postModalContent);
  const theme = useTheme();

  const handleClose = () => {
    dispatch(setModalPost(false));
  };

  return (
    <Modal onClose={handleClose} open={isOpen}>
      <ModalBody
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          padding: "0.5rem",
          borderRadius: "1rem",
        }}>
        <IconButton
          onClick={handleClose}
          sx={{
            borderRadius: "50%",
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.1)",
            },
          }}>
          <Cross size={26.25} fill={theme.palette[theme.palette.mode].secondary} />
        </IconButton>
        <Stack sx={{ width: "100%", justifyContent: "space-between" }}>{content}</Stack>
      </ModalBody>
    </Modal>
  );
}

PostModal.propTypes = {
  isOpen: PropTypes.bool,
};
