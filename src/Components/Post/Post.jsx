import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { useSelector, useDispatch } from "react-redux";
import { addPost, updateTweet } from "../../redux/actions/createPost";
import { setModalPost } from "../../redux/actions/modalPost";
import { Avatar } from "@mui/material";
import styles from "./Post.module.scss";
import classNames from "classnames";
import ButtonStyled from "../Button/Button";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import EmojiPicker from "emoji-picker-react";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import { api } from "../../service/api";

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
  marginLeft: "70px",
  width: "100%",
  height: "70%",
  cursor: "text",

  "& textarea": {
    fontSize: "24px",
    lineHeight: "28px",
  },
});

const Post = () => {
  const [files, setFiles] = useState([]);
  const [inputStr, setInputStr] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const { isAuthenticated } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  // Створення обєкта з даними поста

  const formData = new FormData();

  const submit = () => {
    // const textData = new Blob([inputStr], { type: "text/plain;charset=UTF-8" });
    formData.append("body", inputStr);

    formData.append("type", "TWEET");

    files.forEach((file) => {
      formData.append(`images`, file);
    });

    // console.log(formData);
    dispatch(addPost(formData));
    // async function createPost() {
    //   try {
    //     const response = await api.post("posts/create", formData, {
    //       headers: { "Content-Type": "application/json" },
    //     });
    //     const post = response.data;
    //     console.log(post);
    //     dispatch(addPost(post)); // dispatch викликає вашу дію ADD_TO_POST для збереження поста в Redux-стані
    //   } catch (error) {
    //     console.error(error.response.data);
    //   }
    // }
    // createPost();
    
  
    
    api
      .post("posts/create", formData)
      .then((response) => response)
      .then(({ data }) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Сталася помилка:", error);
      });

    // toggleModalPost()
  };

  // Відмалювання смайлів
  const onEmojiClick = (event, emojiObject) => {
    setInputStr((prevInput) => {
      return (prevInput += event.emoji);
    });

    setShowEmojiPicker(false);
  };
  // Створення масиву URL зображень
  // const imageUrls = [];

  // files.forEach((file) => {
  //   const blob = new Blob([file], { type: file.type });
  //   const imageUrl = URL.createObjectURL(blob);
  //   imageUrls.push(imageUrl);

  // });

  const toggleModalPost = () => {
    dispatch(setModalPost());
  };
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
            placeholder="What is happening ?!"
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
              sx={{ "&:hover": { transform: "scale(1.3)" } }}
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
          Post
        </ButtonStyled>
      </div>
    </>
  );
};
export default Post;
