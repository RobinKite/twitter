import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import Modal from "@mui/material/Modal";
import { ReactComponent as Close } from "../LoginFormsModal/svg/Clos.svg";
import classNames from "classnames";
import styles from "../PostModal/PostModal.module.scss";
import { Box } from "@mui/system";
import { styled } from "@mui/material";
import ComentPost from "../ComentPost/ComentPost";
import ItemPost from "../ItemPost/ItemPost";
export const ModalBody = styled(Box)(() => ({
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
export default function ModalComentPost({
  isOpen,
  closeModal,
  content,
  imageUrls,
  id,
  likeCount,
  liked,
  updateComment,
  avatarUrl,
  fullName,
}) {
  const dispatch = useDispatch();

  const fonnClick = (event) => {
    if (event.currentTarget === event.target) {
    }
  };

  return (
    <div>
      <Modal
        open={isOpen}
        onClose={fonnClick}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalBody>
          <div className={classNames(styles.close)}>
            <Close
              onClick={closeModal}
              className={classNames(styles.clossvg)}
            />
          </div>
          <div className={classNames(styles.postInput)}>
            <ItemPost
              key={id}
              content={content}
              imageUrls={imageUrls}
              id={id}
              likeCount={likeCount}
              liked={liked}
              avatarUrl={avatarUrl}
              fullName={fullName}
              disable={true}
            />
            <ComentPost
              id={id}
              closeModal={closeModal}
              updateComment={updateComment}
              avatarUrl={avatarUrl}
              fullName={fullName}
            />
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
}
