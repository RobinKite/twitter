import { Modal, Box, IconButton, Stack, styled } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { Cross } from "@/icons";
import { setModalPost } from "@/redux/slices/appSlice";

export const ModalBody = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: "600px",
  width: "100%",
  minHeight: "20em",
  maxHeight: "40em",
  overflowY: "auto",
  overflowX: "hidden",
  backgroundColor: theme.palette[theme.palette.mode].primary,
  display: "flex",
  justifyContent: "flex-start",
  flexDirection: "column",
  textAlign: "center",
  borderRadius: 24,
  paddingLeft: 16,
  paddingRight: 16,

  "@media(max-width: 700px)": {
    minWidth: "100%",
    minHeight: "100%",
  },
}));

export function PostModal({ isOpen }) {
  const dispatch = useDispatch();
  const content = useSelector((state) => state.app.postModalContent);

  const handleClose = () => {
    dispatch(setModalPost(false));
  };

  return (
    <div>
      <Modal onClose={handleClose} open={isOpen}>
        <ModalBody
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            padding: "0.5rem",
            borderRadius: "1rem",
          }}>
          <IconButton onClick={handleClose}>
            <Cross />
          </IconButton>
          <Stack sx={{ width: "100%", justifyContent: "space-between" }}>{content}</Stack>
        </ModalBody>
      </Modal>
    </div>
  );
}

PostModal.propTypes = {
  isOpen: PropTypes.bool,
};
