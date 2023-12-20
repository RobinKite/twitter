import { Box } from "@mui/material";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "@/components";
import { Settings, CreateConversationDialog } from "@/features/messaging/components";
import { Conversations, CurrentConversation } from "@/features/messaging/components";
import {
  fetchConversations,
  fetchMessages,
  fetchRecommendedUsers,
} from "@/redux/slices/messagingSlice";
import { setCurrentConversation } from "@/redux/slices/messagingSlice";

export const Messages = ({ withSettings }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const conversations = useSelector((state) => state.messaging.conversations);

  useEffect(() => {
    dispatch(fetchConversations());
    dispatch(fetchRecommendedUsers());
  }, [dispatch]);

  useEffect(() => {
    if (conversations && !id) dispatch(setCurrentConversation(null));
    if (!conversations || !id) return;
    const [currentConversation] = conversations.filter(
      (conversation) => conversation.id === parseInt(id),
    );

    if (currentConversation) {
      dispatch(setCurrentConversation(currentConversation));
      dispatch(fetchMessages(currentConversation.id));
    } else {
      dispatch(setCurrentConversation(null));
      navigate("/messages");
    }
  }, [id, conversations, navigate, dispatch]);

  return (
    <>
      <Container withSidebar={false}>
        <Box sx={{ display: "grid", gridTemplateColumns: "1.75fr 2fr", flexGrow: 1 }}>
          <Conversations />
          {withSettings ? <Settings /> : <CurrentConversation />}
        </Box>
      </Container>
      <CreateConversationDialog />
    </>
  );
};

Messages.propTypes = {
  withSettings: PropTypes.bool,
};

Messages.defaultProps = {
  withSettings: false,
};
