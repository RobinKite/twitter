import { Avatar } from "@mui/material";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import { useState } from "react";
import { useDispatch } from "react-redux";
import EmojiPicker from "emoji-picker-react";
import { Button } from "../../components";
import { setModalPost } from "../../redux/slices/appSlice";
import styles from "./Post.module.scss";
import PropTypes from "prop-types";

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

export const Post = ({ avatarUrl }) => {
  const [files, setFiles] = useState([]);
  const [inputStr, setInputStr] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const dispatch = useDispatch();

  // Створення обєкта з даними поста

  const formData = new FormData();

  const submit = () => {
    formData.append("body", inputStr);

    formData.append("type", "TWEET");

    files.forEach((file) => {
      formData.append(`images`, file);
    });

    // dispatch(addPosts(formData));

    setInputStr("");
    setFiles([]);

    dispatch(setModalPost(false));
  };

  // Відмалювання смайлів
  const onEmojiClick = (event) => {
    setInputStr((prevInput) => {
      return (prevInput += event.emoji);
    });

    setShowEmojiPicker(false);
  };

  return (
    <>
      <div>
        <Avatar
          sx={{
            mt: 0,
            ml: 1,
            bgcolor: "rgb(8, 139, 226)",
            width: 50,
            height: 50,
          }}
          alt="Remy Sharp"
          src={avatarUrl}
        />
        <div className={styles.conteinerPost}>
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
            <EmojiPicker pickerStyle={{ width: "100%" }} onEmojiClick={onEmojiClick} />
          )}

          {files.map((file, index) => (
            <img
              key={index}
              style={{ width: "240px", objectFit: "cover" }}
              src={URL.createObjectURL(file)}
              alt=""
              onClick={() => {
                setFiles((prevState) => prevState.filter((_, i) => i !== index));
              }}
            />
          ))}
        </div>
      </div>
      <div className={styles.conteinerFooterPost}>
        <div className={styles.conteinerSvgPost}>
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
                    .map((_, i) => e.target.files[i]),
                );
              }}
            />
          </IconButton>

          <IconButton component="label" onClick={() => setShowEmojiPicker((val) => !val)}>
            <InsertEmoticonIcon
              color="primary"
              fontSize="large"
              sx={{ "&:hover": { transform: "scale(1.3)" } }}
            />
          </IconButton>
        </div>
        <Button
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
          }}>
          Post
        </Button>
      </div>
    </>
  );
};

Post.propTypes = {
  avatarUrl: PropTypes.string,
};
