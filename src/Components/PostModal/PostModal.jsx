import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setModalPost } from "../../redux/actions/modalPost";
import Modal from "@mui/material/Modal";
import Post from "../Post/Post";
import { ReactComponent as Close } from "../LoginFormsModal/svg/Clos.svg";
// import { ReactComponent as Close } from "../LoginFormsModal/svg/Close.svg";
import classNames from "classnames";
import styles from "./PostModal.module.scss";
import { Box } from "@mui/system";
import { TextField } from "@mui/material";
import { styled } from "@mui/material";

const ModalBody = styled(Box)(() => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  // position: "relative",
  maxWidth: "700px",
  width: "100%",
  minHeight: "30em",
  maxHeight: "55em",
  overflowY: "auto",
  overflowX: "hidden",
  backgroundColor: "white",
  display: "flex",
  // justifyContent: "space-between",
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
  const { open } = props;
  const dispatch = useDispatch();
  const toggleModalPost = () => {
    dispatch(setModalPost());
  };

  const fonnClick = (event) => {
    // Перевіряємо, чи клік був здійснений за межами модального вікна
    if (event.currentTarget === event.target) {
      //Якщо так, то додаємо код для закриття модального вікна
      toggleModalPost();
    }
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={fonnClick}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalBody>
          <div className={classNames(styles.close)} onClick={toggleModalPost}>
            <Close className={classNames(styles.clossvg)} />
          </div>
          <div className={classNames(styles.postInput)}>
            <Post />
          </div>
          
        </ModalBody>
      </Modal>
    </div>
  );
}
