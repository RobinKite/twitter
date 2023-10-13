// import * as React from "react";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import { useSelector, useDispatch } from "react-redux";
import { setModalPost } from "../../redux/actions/modalPost";
import { Avatar } from "@mui/material";
import styles from "./Post.module.scss";
import classNames from "classnames";
// import { ReactComponent as Close } from "../LoginFormsModal/svg/Close.svg";
import { ReactComponent as Close } from "../LoginFormsModal/svg/Clos.svg";
import ButtonStyled from "../Button/Button";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import EmojiPicker from "emoji-picker-react";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";

import ReactDOM from "react-dom/client";
import Button from "@mui/material/Button";

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

// const ModalBody = styled(Box)(() => ({
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   // position: "relative",
//   maxWidth: "700px",
//   width: "100%",
//   minHeight: "30em",
//   maxHeight: "55em",
//   overflowY: "auto",
//   overflowX: "hidden",
//   backgroundColor: "white",
//   display: "flex",
//   justifyContent: "space-between",
//   flexDirection: "column",
//   textAlign: "center",
//   borderRadius: 24,
//   paddingLeft: 16,
//   paddingRight: 16,
//   "@media(max-width: 700px)": {
//     minWidth: "100%",
//     minHeight: "100%",
//   },
// }));
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
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [inputStr, setInputStr] = useState("");
  const onEmojiClick = (event, emojiObject) => {
    setInputStr((prevInput) => {
      return (prevInput += event.emoji);
    });

    setShowEmojiPicker(false);
  };

  const dispatch = useDispatch();
  const toggleModal = () => {
    dispatch(setModalPost());
  };

  return (
    <>
      {/* <ModalBody> */}
      <div>
        {/* <div className={classNames(styles.close)} onClick={toggleModal}>
            <Close className={classNames(styles.clossvg)} />
          </div> */}

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
      {/* </ModalBody> */}
    </>
  );
};
export default Post;
