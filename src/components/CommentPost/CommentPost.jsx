import PropTypes from "prop-types";
import { PostType } from "@/constants";
import CommentPostTemplate from "../CommentPostTemplate/CommentPostTemplate";

export const CommentPost = ({
  id,
  avatarUrl,
  closeModal,
  // fullName,
}) => {
  return (
    <CommentPostTemplate
      avatarUrl={avatarUrl}
      id={id}
      closeModal={closeModal}
      placeholder="Post your reply"
      buttonName="Reply"
      type={PostType.REPLY}
    />
  );
};

CommentPost.propTypes = {
  closeModal: PropTypes.func,
  avatarUrl: PropTypes.string,
  id: PropTypes.string,
};

CommentPost.defaultProps = {
  closeModal: () => {},
};
