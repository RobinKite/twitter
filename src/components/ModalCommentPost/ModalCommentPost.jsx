import Modal from "@mui/material/Modal";
import { CommentPost, ItemPost } from "..";
import { Cross } from "@/icons";
import styles from "../PostModal/PostModal.module.scss";
import PropTypes from "prop-types";
import { ModalBody } from "./styleSX";

export function ModalCommentPost({ isOpen, closeModal, id, avatarUrl, fullName, post }) {
  return (
    <div>
      <Modal open={isOpen}>
        <ModalBody>
          <div className={styles.close}>
            <button onClick={closeModal} className={styles.clossvg}>
              <Cross size={30} />
            </button>
          </div>
          <div className={styles.postInput}>
            <ItemPost key={id} disable={true} post={post} />
            <CommentPost
              id={id}
              closeModal={closeModal}
              avatarUrl={avatarUrl}
              fullName={fullName}
            />
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
}

ModalCommentPost.propTypes = {
  isOpen: PropTypes.bool,
  closeModal: PropTypes.func,
  id: PropTypes.string,
  avatarUrl: PropTypes.string,
  fullName: PropTypes.string,
  post: PropTypes.object,
};
