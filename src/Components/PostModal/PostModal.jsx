import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setModalPost } from "../../redux/actions/modalPost";
import Modal from "@mui/material/Modal";
import { ReactComponent as Close } from "../LoginFormsModal/svg/Clos.svg";
import classNames from "classnames";
import styles from "./PostModal.module.scss";
import { Box } from "@mui/system";
import { styled } from "@mui/material";

export const ModalBody = styled(Box)(() => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: "700px",
  width: "100%",
  minHeight: "30em",
  maxHeight: "55em",
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
export default function PostModal(props) {
  const { isOpen } = props;
  const dispatch = useDispatch();
  const content = useSelector((state) => state.postModal.content);

  return (
    <div>
      <Modal
        open={isOpen}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <ModalBody>
          <div className={classNames(styles.close)}>
            <Close
              onClick={() => {
                if (isOpen) {
                  dispatch(setModalPost());
                }
              }}
              className={classNames(styles.clossvg)}
            />
          </div>
          <div className={classNames(styles.postInput)}>{content}</div>
        </ModalBody>
      </Modal>
    </div>
  );
}
