import { Avatar, Stack } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import EmojiPicker from "emoji-picker-react";
import PropTypes from "prop-types";
import { Media, Emoji } from "@/icons";
import usePostData from "@/hooks/usePostData";
import {
  ButtonPost,
  ConteinerPostSX,
  InputField,
  VisuallyHiddenInput,
  WrapperImgSX,
  WrapperSX,
} from "./styledSX";
import { useSelector } from "react-redux";

export const CommentPost = (props) => {
  const { id, placeholder, buttonName, type } = props;

  const {
    inputStr,
    showEmojiPicker,
    files,
    onEmojiClick,
    setInputStr,
    setFiles,
    setShowEmojiPicker,
    submit,
  } = usePostData(type, id);

  const avatarURL = useSelector((state) => state.user.user.avatarUrl);

  return (
    <WrapperSX>
      <Avatar
        sx={{
          m: 0,
          mr: "12px",
          bgcolor: "rgb(8, 139, 226)",
          width: 40,
          height: 40,
        }}
        alt="Remy Sharp"
        src={avatarURL}
      />
      <ConteinerPostSX>
        <InputField
          placeholder={placeholder}
          variant="standard"
          InputProps={{
            disableUnderline: true,
          }}
          multiline
          fullWidth
          maxRows={18}
          minRows={3}
          onChange={(e) => setInputStr(e.target.value)}
          value={inputStr}
          sx={{
            "& textarea::placeholder": {
              opacity: 1,
              color: "#536371",
            },

            "&.MuiFormControl-root": {
              borderBottom: 0,
            },
          }}
        />

        <WrapperImgSX>
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
        </WrapperImgSX>

        {showEmojiPicker && (
          <EmojiPicker pickerStyle={{ width: "100%" }} onEmojiClick={onEmojiClick} />
        )}

        <Stack direction="row" justifyContent="space-between">
          <Stack direction="row">
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
            <IconButton
              component="label"
              onClick={() => setShowEmojiPicker((val) => !val)}>
              <Emoji size={20} fill="#1D9BF0" />
            </IconButton>
          </Stack>
          <ButtonPost type="submit" onClick={submit}>
            {buttonName}
          </ButtonPost>
        </Stack>
      </ConteinerPostSX>
    </WrapperSX>
  );
};

CommentPost.propTypes = {
  placeholder: PropTypes.string,
  buttonName: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.string,
};
