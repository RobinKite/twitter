import { useState } from "react";
import { useDispatch } from "react-redux";
import { setModalPost } from "@/redux/slices/appSlice";
import { addPosts } from "@/redux/slices/postsSlice";
import { PostType } from "@/constants";

const usePostData = (type, callback, parentPostId) => {
  const [files, setFiles] = useState([]);
  const [inputStr, setInputStr] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const dispatch = useDispatch();
  const formData = new FormData();

  const submit = () => {
    if (!inputStr && files.length === 0) {
      return;
    }
    formData.append("body", inputStr);

    formData.append("type", type);
    if (type === PostType.REPLY) {
      formData.append("parentPostId", parentPostId);
    }
    files.forEach((file) => {
      formData.append(`images`, file);
    });

    dispatch(addPosts(formData));

    setInputStr("");
    setFiles([]);
    if (type === PostType.TWEET) {
      dispatch(setModalPost(false));
    } else {
      callback();
    }
  };

  const onEmojiClick = (event) => {
    setInputStr((prevInput) => {
      return (prevInput += event.emoji);
    });

    setShowEmojiPicker(false);
  };

  return {
    inputStr,
    showEmojiPicker,
    files,
    onEmojiClick,
    setInputStr,
    setFiles,
    setShowEmojiPicker,
    submit,
  };
};

export default usePostData;
