import { Avatar } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import EmojiPicker from "emoji-picker-react";
import styles from "./CommentPostTemplate.module.scss";
import PropTypes from "prop-types";
import Media from "@/assets/icons/media.svg?react";
import Emoji from "@/assets/icons/emoji.svg?react";
import { ButtonPost, InputField, VisuallyHiddenInput } from "./styledSX";
import usePostData from "@/hooks/usePostData";

const CommentPostTemplate = (props) => {
  const { id, closeModal, avatarUrl, placeholder, buttonName, type } = props;

  const {
    inputStr,
    showEmojiPicker,
    files,
    onEmojiClick,
    setInputStr,
    setFiles,
    setShowEmojiPicker,
    submit,
  } = usePostData(type, closeModal, id);
  return (
    <div className={styles.wrapper}>
      <div>
        <div className={styles.conteinerPost}>
          <Avatar
            sx={{
              mt: 0,
              ml: 1,
              bgcolor: "rgb(8, 139, 226)",
              width: 40,
              height: 40,
            }}
            alt="Remy Sharp"
            src={avatarUrl}
          />

          <InputField
            placeholder={placeholder}
            variant="standard"
            InputProps={{
              disableUnderline: true,
            }}
            // TODO: next line causes issues by rerendering infinitely whole app (it is known issue: https://github.com/mui/material-ui/issues/33081)
            multiline
            fullWidth
            maxRows={18}
            onChange={(e) => setInputStr(e.target.value)}
            value={inputStr}
          />
        </div>
        <div className={styles.wrapperImg}>
          {files.map((file, index) => (
            <img
              key={index}
              style={{
                maxWidth: files.length > 1 ? "49%" : "90%",

                objectFit: "cover",
              }}
              src={URL.createObjectURL(file)}
              alt=""
              onClick={() => {
                setFiles((prevState) => prevState.filter((_, i) => i !== index));
              }}
            />
          ))}
        </div>

        {showEmojiPicker && (
          <EmojiPicker pickerStyle={{ width: "100%" }} onEmojiClick={onEmojiClick} />
        )}
      </div>
      <div className={styles.conteinerFooterPost}>
        <div className={styles.conteinerSvgPost}>
          <IconButton component="label">
            <Media />
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
            <Emoji />
          </IconButton>
        </div>
        <ButtonPost type="submit" onClick={submit}>
          {buttonName}
        </ButtonPost>
      </div>
    </div>
  );
};

export default CommentPostTemplate;
CommentPostTemplate.propTypes = {
  avatarUrl: PropTypes.string,
  closeModal: PropTypes.func,
  placeholder: PropTypes.string,
  buttonName: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.string,
};
