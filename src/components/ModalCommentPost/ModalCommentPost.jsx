import Modal from "@mui/material/Modal";
import { CommentPost, ItemPost } from "@/components";
import { PostType } from "@/constants";
import { Cross } from "@/icons";
import PropTypes from "prop-types";
import { ModalBody } from "./styleSX";
import { IconButton, Stack, useTheme } from "@mui/material";

export function ModalCommentPost({ isOpen, closeModal, id, post }) {
  const theme = useTheme();
  return (
    <Modal open={isOpen} onClose={closeModal}>
      <ModalBody>
        <Stack direction="row">
          <IconButton
            onClick={closeModal}
            sx={{
              borderRadius: "50%",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              },
            }}>
            <Cross size={26.25} fill={theme.palette[theme.palette.mode].secondary} />
          </IconButton>
        </Stack>
        <Stack justifyContent="space-between">
          <ItemPost key={id} disable={true} post={post} />
          <CommentPost
            id={id}
            placeholder="Post your reply"
            buttonName="Reply"
            type={PostType.REPLY}
            onClose={closeModal}
          />
        </Stack>
      </ModalBody>
    </Modal>
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
