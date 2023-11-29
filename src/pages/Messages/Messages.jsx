import { Box } from "@mui/material";
import PropTypes from "prop-types";
import { Container } from "@/components";
import { Conversations, Chat, ChatSettings } from "@/features/messaging/components";
import { wrapperSx } from "./styles";

export const Messages = ({ withSettings }) => {
  return (
    <Container withSidebar={false}>
      <Box sx={wrapperSx}>
        <Conversations />
        {withSettings ? <ChatSettings /> : <Chat />}
      </Box>
    </Container>
  );
};

Messages.propTypes = {
  withSettings: PropTypes.bool,
};

Messages.defaultProps = {
  withSettings: false,
};
