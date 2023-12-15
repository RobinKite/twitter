import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { WelcomeMessage } from "@/features/messaging/components";
import { wrapperSx, messageWrapperSx } from "./styles";

export const CurrentConversation = () => {
  const currentConversation = useSelector((state) => state.messaging.currentConversation);

  return (
    <Box sx={wrapperSx}>
      {/* TODO: 👉 Do not show welcome message on load */}
      {!currentConversation && (
        <Box sx={messageWrapperSx}>
          <WelcomeMessage
            title="Select a message"
            text="Choose from your existing conversations, start a new one, or just keep swimming."
            buttonText="New message"
          />
        </Box>
      )}
    </Box>
  );
};
