import { Avatar } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import EmojiPicker from "emoji-picker-react";
import PropTypes from "prop-types";
import { Media, Emoji } from "@/icons";
import usePostData from "@/hooks/usePostData";
import styles from "./CommentPostTemplate.module.scss";
import { ButtonPost, InputField, VisuallyHiddenInput } from "./styledSX";

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
            <Media size={20} fill="#1D9BF0" />
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
            <Emoji size={20} fill="#1D9BF0" />
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
