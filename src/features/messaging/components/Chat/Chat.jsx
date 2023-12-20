import { Stack, TextareaAutosize, IconButton, Select, MenuItem } from "@mui/material";
import { Box, Typography, LinearProgress } from "@mui/material";
import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { Media, Emoji, More, Send } from "@/icons";
import { convertDateFormat } from "@/utils/date";
import { createMessage } from "@/redux/slices/messagingSlice";

export const InputField = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const handleChange = ({ target }) => {
    if (target.value.length > 255) return;
    setValue(target.value);
  };

  const handleSendMessage = () => {
    if (!value.trim()) return;
    dispatch(createMessage(value));
    setValue("");
    window.dispatchEvent(new Event("resize"));
  };

  const onKeyDown = (event) => {
    if (event.code === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <Stack
      sx={{
        borderBlock: "1px solid #eff3f4",
        padding: "0.25rem 0.75rem",
      }}>
      <Stack
        sx={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#EFF3F4",
          padding: "0.25rem",
          borderRadius: "1rem",
          position: "relative",
        }}>
        <Stack direction="row">
          <IconButton>
            <Media size={20} fill="#1D9BF0" />
          </IconButton>
          <IconButton>
            <Emoji size={20} fill="#1D9BF0" />
          </IconButton>
        </Stack>
        <Stack sx={{ flexGrow: 1, padding: "0.25rem 0.75rem" }}>
          <TextareaAutosize
            onKeyDown={onKeyDown}
            onChange={handleChange}
            value={value}
            placeholder="Start a new message"
            style={{
              resize: "none",
              fontSize: "0.925rem",
              color: "#0f1419",
              maxHeight: 160,
              overflow: "auto",
            }}
          />
        </Stack>
        <IconButton disabled={!value.trim()} onClick={handleSendMessage}>
          <Send size={20} fill="#1D9BF0" opacity={value.trim() ? 1 : 0.5} />
        </IconButton>
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            paddingInline: "0.8875rem",
          }}>
          <LinearProgress
            variant="determinate"
            value={(value.length / 255) * 100}
            sx={{
              borderRadius: "1rem",
              "&.MuiLinearProgress-root": {
                height: 2,
              },
            }}
          />
        </Box>
      </Stack>
    </Stack>
  );
};

const Message = ({ body, createdAt, user }) => {
  const [open, setOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const currentUser = useSelector((state) => state.user.user);
  const isSelf = currentUser.id === user.id;
  const formattedDate = convertDateFormat(createdAt);

  return (
    <Stack
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      sx={{
        alignSelf: isSelf ? "flex-end" : "flex-start",
        marginBottom: "1rem",
      }}>
      <Stack
        direction={isSelf ? "row-reverse" : "row"}
        alignItems="center"
        columnGap="0.25rem">
        <Typography
          sx={{
            backgroundColor: isSelf ? "rgb(29,155,240)" : "rgb(239,243,244)",
            padding: "12px 16px",
            borderRadius: "24px",
            borderBottomRightRadius: isSelf ? "4px" : "",
            borderBottomLeftRadius: !isSelf ? "4px" : "",
            color: isSelf ? "rgb(256,256,256)" : "rgb(0,0,0)",
            fontSize: "15px",
            wordBreak: "break-word",
            maxWidth: 400,
          }}>
          {body}
        </Typography>
        {isHovered && (
          <Stack>
            <IconButton sx={{}} onClick={() => setOpen(true)}>
              <More />
            </IconButton>
            <Select
              open={open}
              onClose={() => setOpen(false)}
              sx={{
                position: "relative",
                clip: "rect(0 0 0 0)",
                clipPath: "inset(50%)",
                height: "1px",
                overflow: "hidden",
                whiteSpace: "nowrap",
                width: "1px",
              }}>
              <MenuItem onClick={() => {}}>Reply</MenuItem>
              <MenuItem onClick={() => {}}>Delete</MenuItem>
            </Select>
          </Stack>
        )}
      </Stack>
      <Typography
        sx={{
          fontSize: "13px",
          color: "rgb(83, 100, 113)",
          alignSelf: isSelf ? "flex-end" : "flex-start",
        }}>
        {formattedDate}
      </Typography>
    </Stack>
  );
};

Message.propTypes = {
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
};

export const Chat = () => {
  const messages = useSelector((state) => state.messaging.messages);
  const chatRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      chatRef.current.style.maxHeight = null;
      [...chatRef.current.children].forEach(
        (element) => (element.style.display = "none"),
      );
      const maxHeight = chatRef.current.offsetHeight;
      chatRef.current.style.maxHeight = `${maxHeight}px`;
      [...chatRef.current.children].forEach((element) => (element.style.display = null));
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Stack justifyContent="space-between" flexGrow="1">
      <Stack
        flexGrow="1"
        flexDirection="column-reverse"
        ref={chatRef}
        overflow="auto"
        sx={{ paddingX: "16px" }}>
        {messages.map((message) => (
          <Message key={message.id} {...message} />
        ))}
      </Stack>
      <InputField />
    </Stack>
  );
};
