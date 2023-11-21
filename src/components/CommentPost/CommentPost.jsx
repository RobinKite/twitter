import { Avatar } from "@mui/material";
import { styled } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import { useState } from "react";
import EmojiPicker from "emoji-picker-react";
import PropTypes from "prop-types";
import { Button } from "..";
import styles from "./CommentPost.module.scss";

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

export const CommentPost = ({
  id,
  // closeModal,
  // updateComment,
  // setPostComments,
  avatarUrl,
  // fullName,
}) => {
  const [files, setFiles] = useState([]);
  const [inputStr, setInputStr] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const formData = new FormData();

  const submit = () => {
    formData.append("body", inputStr);
    formData.append("type", "REPLY");
    formData.append("parentPostId", id);

    files.forEach((file) => {
      formData.append(`images`, file);
    });

    // TODO: add function from postsSlice
    // api
    //   .post("posts/create", formData)
    //   .then((response) => {
    //     const responseDataComent = response.data;
    //     updateComment(responseDataComent);
    //     setInputStr("");
    //     setFiles([]);
    //     closeModal();
    //   })
    //   .catch((error) => {
    //     console.error("Помилка отримання деталей поста:", error);
    //   });
  };

  const onEmojiClick = (event) => {
    setInputStr((prevInput) => {
      return (prevInput += event.emoji);
    });

    setShowEmojiPicker(false);
  };

  return (
    <>
      <div>
        <div className={styles.conteinerPost}>
          <Avatar
            sx={{
              mt: 0,
              ml: 1,
              bgcolor: "rgb(8, 139, 226)",
              width: 56,
              height: 56,
            }}
            alt="Remy Sharp"
            src={avatarUrl}
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
                    .map((_, i) => e.target.files[i]),
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
          Reply
        </Button>
      </div>
    </>
  );
};

CommentPost.propTypes = {
  // closeModal: PropTypes.func,
  // updateComment: PropTypes.func,
  avatarUrl: PropTypes.string,
  id: PropTypes.string,
};

// CommentPost.defaultProps = {
//   closeModal: () => {},
//   updateComment: () => {},
// };
