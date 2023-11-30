import { Box } from "@mui/material";
import { WelcomeMessage } from "@/features/messaging/components";
import { wrapperSx, messageWrapperSx } from "./styles";

export const Chat = () => {
  const isEmpty = true;

  return (
    <Box sx={wrapperSx}>
      {isEmpty && (
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
