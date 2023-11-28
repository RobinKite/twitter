import { Box } from "@mui/material";
import { WelcomeMessage } from "@/components";
import { wrapperSx, messageWrapperSx } from "./styles";

export const Chat = () => {
  return (
    <Box sx={wrapperSx}>
      <Box sx={messageWrapperSx}>
        <WelcomeMessage
          title="Select a message"
          text="Choose from your existing conversations, start a new one, or just keep swimming."
          buttonText="New message"
        />
      </Box>
    </Box>
  );
};
