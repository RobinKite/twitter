import { Box, Stack, Typography, IconButton, styled, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Gear, MessagePlus } from "@/icons";
import { setShowDialog } from "@/redux/slices/messagingSlice";
import { WelcomeMessage, ConversationItem } from "@/features/messaging/components";
import { Parser } from "@/features/messaging/services";
import { useEffect, useState } from "react";

const Wrapper = styled(Stack, { shouldForwardProp: (prop) => prop !== "maxHeight" })(
  ({ maxHeight }) => ({
    maxHeight,
    overflowY: "auto",
    borderLeft: "1px solid #EFF3F4",
    borderRight: "1px solid #EFF3F4",
  }),
);

const Header = styled(Stack)({
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  paddingBlock: "0.5rem",
  paddingLeft: "1rem",
  paddingRight: "0.5rem",
  position: "sticky",
  zIndex: 1,
  top: 0,
  backdropFilter: "blur(12px)",
  backgroundColor: "rgba(255,255,255,0.85)",
});

export const Conversations = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const conversations = useSelector((state) => state.messaging.conversations);
  const [maxHeight, setMaxHeight] = useState("unset");

  useEffect(() => {
    const handleResize = () => setMaxHeight(window.innerHeight);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const theme = useTheme();
  return (
    <Wrapper maxHeight={maxHeight}>
      <Header>
        <Typography variant="h2" sx={{ fontSize: "1.2rem", fontWeight: 600 }}>
          Messages
        </Typography>
        <Stack sx={{ flexDirection: "row" }}>
          <IconButton onClick={() => navigate("/messages/settings")}>
            <Gear
              // fill="#0F1419"
              fill={theme.palette[theme.palette.mode].secondary}
              size={21}
            />
          </IconButton>
          <IconButton onClick={() => dispatch(setShowDialog(true))}>
            <MessagePlus
              // fill="#0F1419"
              fill={theme.palette[theme.palette.mode].secondary}
              size={20}
            />
          </IconButton>
        </Stack>
      </Header>
      {conversations?.length === 0 && (
        <Box sx={{ maxWidth: 340, margin: "0 auto", marginTop: "1.5rem" }}>
          <WelcomeMessage
            title="Welcome to your inbox!"
            text="Drop a line, share posts and more with private conversations between you and others on X."
            buttonText="Write a message"
          />
        </Box>
      )}
      {conversations && (
        <Stack>
          {conversations.map((conversation) => (
            <ConversationItem
              key={conversation.id}
              {...Parser.parseConversation(conversation)}
            />
          ))}
        </Stack>
      )}
    </Wrapper>
  );
};
