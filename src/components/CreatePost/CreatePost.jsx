import PropTypes from "prop-types";
import { PostType } from "@/constants";
import CommentPostTemplate from "../CommentPostTemplate/CommentPostTemplate";

export const CreatePost = ({ avatarUrl }) => {
  return (
    <CommentPostTemplate
      avatarUrl={avatarUrl}
      placeholder="What is happening?!"
      buttonName="Post"
      type={PostType.TWEET}
    />
  );
};

CreatePost.propTypes = {
  avatarUrl: PropTypes.string,
};
