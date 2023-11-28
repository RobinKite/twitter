import { Container, Conversations, Chat } from "@/components";
import { Box } from "@mui/material";
import { wrapperSx } from "./styles";

export const Messages = () => {
  return (
    <Container withSidebar={false}>
      <Box sx={wrapperSx}>
        <Conversations />
        <Chat />
      </Box>
    </Container>
  );
};
