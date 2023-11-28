import { styled } from "@mui/material";
import Modal from "@mui/material/Modal";
import { Box } from "@mui/system";
import { CommentPost, ItemPost } from "..";
import { Cross } from "@/icons";
import styles from "../PostModal/PostModal.module.scss";
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

export function ModalCommentPost({
  isOpen,
  closeModal,
  content,
  imageUrls,
  id,
  likeCount,
  liked,

  avatarUrl,
  fullName,
}) {
  return (
    <div>
      <Modal open={isOpen}>
        <ModalBody>
          <div className={styles.close}>
            <button onClick={closeModal} className={styles.clossvg}>
              <Cross size={26} />
            </button>
          </div>
          <div className={styles.postInput}>
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
  content: PropTypes.string,
  imageUrls: PropTypes.array,
  id: PropTypes.string,
  likeCount: PropTypes.number,
  liked: PropTypes.bool,
  updateComment: PropTypes.func,
  avatarUrl: PropTypes.string,
  fullName: PropTypes.string,
};
