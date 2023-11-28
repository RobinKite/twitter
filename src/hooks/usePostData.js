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

  // Creation of an object with post data

  const formData = new FormData();

  const submit = () => {
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

  // Drawing emoticons
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
