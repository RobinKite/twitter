import { useSelector, useDispatch } from "react-redux";
import Modal from "@mui/material/Modal";
import { styled } from "@mui/material";
import { Box } from "@mui/system";
import { setModalPost } from "../../redux/slices/appSlice";
import Close from "../../assets/icons/close.svg?react";
import styles from "./PostModal.module.scss";
import PropTypes from "prop-types";

export const ModalBody = styled(Box)(() => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: "600px",
  width: "100%",
  // minHeight: "30em",
  maxHeight: "40em",
  overflowY: "auto",
  overflowX: "hidden",
  backgroundColor: "white",
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

  return (
    <div>
      <Modal open={isOpen}>
        <ModalBody>
          <div className={styles.close}>
            <Close
              onClick={() => {
                if (isOpen) {
                  dispatch(setModalPost());
                }
              }}
              className={styles.clossvg}
            />
          </div>
          <div className={styles.postInput}>{content}</div>
        </ModalBody>
      </Modal>
    </div>
  );
}

PostModal.propTypes = {
  isOpen: PropTypes.bool,
};
