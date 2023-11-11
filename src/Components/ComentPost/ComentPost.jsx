import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { useSelector, useDispatch } from "react-redux";
import { addPost, addPosts, deleteFromPost, getPosts, setPosts, updateTweet } from "../../redux/actions/createPost";
import {
  closeModal,
  setModal,
  setModalPost,
} from "../../redux/actions/modalPost";
import { Avatar } from "@mui/material";
import styles from "./ComentPost.module.scss";
import classNames from "classnames";
import ButtonStyled from "../Button/Button";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import EmojiPicker from "emoji-picker-react";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import { api } from "../../service/api";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import ItemPost from "../ItemPost/ItemPost";
const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 30,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 30,
});

const InputFieldCostum = styled(TextField)({
  marginLeft: "15px",
  width: "100%",
  height: "70%",
  cursor: "text",

  "& textarea": {
    fontSize: "24px",
    lineHeight: "28px",
  },
});

const ComentPost = ({ id, closeModal,updateComment,setPostComments,}) => {
  
  const [commentList, setCommentList] = useState([]);
  // console.log(dataComent);
  const [files, setFiles] = useState([]);
  const [inputStr, setInputStr] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const { isAuthenticated } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  // Створення обєкта з даними Коментаря

  const formData = new FormData();

  const submit = () => {
    formData.append("body", inputStr);
    formData.append("type", "REPLY");
    formData.append("parentPostId", id);
  
    files.forEach((file) => {
      formData.append(`images`, file);
    });
  
    api
      .post("posts/create", formData)
      .then((response) => {
        const responseDataComent = response.data;
        console.log(responseDataComent.parentPost);
  
        // Викликаємо функцію оновлення коментарів лише при успішному створенні
        updateComment(responseDataComent);
        // updateCommentHome(responseDataComent)
        // Очищення стану після успішного створення коментаря
        setInputStr("");
        setFiles([]);
       
        // Закриваємо модальне вікно після успішного створення коментаря
        closeModal();
      })
      .catch((error) => {
        console.error("Помилка отримання деталей поста:", error);
  
        // Додайте логіку обробки помилок тут, наприклад, показ помилки користувачу
      });
  };

  // Відмалювання смайлів
  const onEmojiClick = (event, emojiObject) => {
    setInputStr((prevInput) => {
      return (prevInput += event.emoji);
    });

    setShowEmojiPicker(false);
  };

  // if (!dataComent) {
  //   return <div>Loading...</div>;
  // }
  return (
    <>
      <div>
        <div className={classNames(styles.conteinerPost)}>
          <Avatar
            sx={{
              mt: 0,
              ml: 1,
              bgcolor: "rgb(8, 139, 226)",
              width: 56,
              height: 56,
            }}
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
          />
          <InputFieldCostum
            placeholder="Post your reply "
            variant="standard"
            InputProps={{
              disableUnderline: true,
            }}
            multiline
            fullWidth
            maxRows={18}
            onChange={(e) => setInputStr(e.target.value)}
            value={inputStr}
          />

          {showEmojiPicker && (
            <EmojiPicker
              pickerStyle={{ width: "100%" }}
              onEmojiClick={onEmojiClick}
            />
          )}

          {files.map((file, index) => (
            <img
              key={index}
              style={{ width: "240px", objectFit: "cover" }}
              src={URL.createObjectURL(file)}
              alt=""
              onClick={() => {
                setFiles((prevState) =>
                  prevState.filter((_, i) => i !== index)
                );
              }}
            />
          ))}
        </div>
      </div>
      <div className={classNames(styles.conteinerFooterPost)}>
        <div className={classNames(styles.conteinerSvgPost)}>
          <IconButton component="label">
            <PermMediaIcon
              id="svg-element"
              color="primary"
              fontSize="large"
              sx={{ height: "30px", "&:hover": { transform: "scale(1.3)" } }}
            />
            <VisuallyHiddenInput
              multiple
              accept="image/*"
              type="file"
              onChange={(e) => {
                setFiles(
                  Array(e.target.files.length)
                    .fill({})
                    .map((_, i) => e.target.files[i])
                );
              }}
            />
          </IconButton>

          <IconButton
            component="label"
            onClick={() => setShowEmojiPicker((val) => !val)}
            // onChange={(e) => setInputStr(e.target.value)}
          >
            <InsertEmoticonIcon
              color="primary"
              fontSize="large"
              sx={{ "&:hover": { transform: "scale(1.3)" } }}
            />
          </IconButton>
        </div>
        <ButtonStyled
          type="submit"
          onClick={submit}
          sx={{
            color: "white",
            fontSize: "20px",
            margin: 0,
            height: "50px",
            backgroundColor: "rgb(8, 139, 226)",
            width: "17%",
            "&:hover": { backgroundColor: "rgb(26, 26, 172)" },
          }}
        >
          Reply
        </ButtonStyled>
      </div>


    </>
  );
};
ComentPost.propTypes = {
  closeModal: PropTypes.func,
  updateComment:PropTypes.func,
};

ComentPost.defaultProps = {
  closeModal:() => {} ,
  updateComment:() => {} ,

};

export default ComentPost;
