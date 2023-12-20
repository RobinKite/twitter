import { Avatar, Typography, CircularProgress, Stack, IconButton } from "@mui/material";
import { styled } from "@mui/material";
import { useSelector } from "react-redux";
import { InfoCircle } from "@/icons";
import { WelcomeMessage, Chat } from "@/features/messaging/components";
import { Parser } from "@/features/messaging/services";

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

export const CurrentConversation = () => {
  const currentConversation = useSelector((state) => state.messaging.currentConversation);

  if (currentConversation === "unset") {
    return (
      <Stack sx={{ borderRight: "1px solid rgb(239, 243, 244)" }}>
        <Stack
          sx={{
            justifyContent: "center",
            alignItems: "center",
            flexGrow: "1",
          }}>
          <CircularProgress />
        </Stack>
      </Stack>
    );
  }

  if (!currentConversation) {
    return (
      <Stack sx={{ borderRight: "1px solid rgb(239, 243, 244)" }}>
        <Stack
          sx={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "start",
            flexGrow: "1",
          }}>
          {!currentConversation && (
            <Stack sx={{ maxWidth: 360, margin: "0 auto" }}>
              <WelcomeMessage
                title="Select a message"
                text="Choose from your existing conversations, start a new one, or just keep swimming."
                buttonText="New message"
              />
            </Stack>
          )}
        </Stack>
      </Stack>
    );
  }

  const { titleText, avatarURL } = Parser.parseConversation(currentConversation);

  return (
    <Stack sx={{ borderRight: "1px solid rgb(239, 243, 244)" }}>
      <Header>
        <Stack sx={{ flexDirection: "row", alignItems: "center", columnGap: "0.5rem" }}>
          <Avatar src={avatarURL} sx={{ height: 32, width: 32 }} />
          <Typography sx={{ fontWeight: 600, fontSize: "1.125rem" }}>
            {titleText.substr(0, 48)}
          </Typography>
        </Stack>
        <IconButton>
          <InfoCircle />
        </IconButton>
      </Header>
      <Chat />
    </Stack>
  );
};
