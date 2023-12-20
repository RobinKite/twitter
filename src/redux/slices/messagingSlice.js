import { createSlice } from "@reduxjs/toolkit";
import { Endpoint } from "@/constants";
import { client } from "@/services";
import { areArraysEqual, createRange } from "@/utils";

const createFieldSetter = (fieldName) => (state, action) => {
  state[fieldName] = action.payload;
};

const messagingSlice = createSlice({
  name: "messaging",
  initialState: {
    showDialog: false,
    selectedUsers: [],
    searchResults: [],
    recommendedUsers: [],
    conversations: null,
    currentConversation: "unset",
    messages: [],
  },
  reducers: {
    setSearchResults: createFieldSetter("searchResults"),
    setMessages: createFieldSetter("messages"),
    setCurrentConversation: createFieldSetter("currentConversation"),
    setShowDialog: createFieldSetter("showDialog"),
    setConversations: createFieldSetter("conversations"),
    setRecommendedUsers: createFieldSetter("recommendedUsers"),
    toggleUserSelection: (state, action) => {
      const collectedUsers = state.selectedUsers.filter(
        (user) => user.id !== action.payload.id,
      );
      if (collectedUsers.length === state.selectedUsers.length) {
        state.selectedUsers.push(action.payload);
      } else {
        state.selectedUsers = collectedUsers;
      }
    },
    clearDialogData: (state) => {
      state.selectedUsers = [];
      state.searchResults = [];
    },
  },
});

export const searchUsers = (query) => async (dispatch) => {
  const response = await client.get(Endpoint.USERS_SEARCH, {
    params: { query, pageSize: 13 },
  });
  dispatch(setSearchResults(response.data.content));
};

export const createConversation = (users, navigate) => async (dispatch, getState) => {
  const userIds = users.map((user) => user.id);
  const conversations = getState().messaging.conversations;

  const ids = [...userIds, getState().user.user.id].sort();
  for (const conversation of conversations) {
    const conversationIds = conversation.users.map((user) => user.id).sort();
    if (areArraysEqual(ids, conversationIds)) {
      navigate(`/messages/${conversation.id}`);
      return;
    }
  }

  const response = await client.post(Endpoint.CHATS, { name: "default", userIds });
  dispatch(setConversations([response.data, ...conversations]));
  dispatch(clearDialogData());
  navigate(`/messages/${response.data.id}`);
};

export const deleteConversation = (id) => async (dispatch, getState) => {
  await client.delete(Endpoint.CHATS, { params: { id } });
  const conversations = getState().messaging.conversations.filter(
    (conversation) => conversation.id !== id,
  );
  dispatch(setConversations(conversations));
  dispatch(setCurrentConversation(null));
};

export const leaveConversation = (id) => async (dispatch, getState) => {
  await client.delete(Endpoint.LEAVE_CHAT, { params: { id } });
  const conversations = getState().messaging.conversations.filter(
    (conversation) => conversation.id !== id,
  );
  dispatch(setConversations(conversations));
  dispatch(setCurrentConversation(null));
};

export const fetchConversations = () => async (dispatch) => {
  const response = await client.get(Endpoint.CHATS);
  const conversations = [...response.data.content];
  createRange(1, response.totalPages).forEach(async (page) => {
    const response = await client.get(Endpoint.CHATS, { params: { page } });
    conversations.push(response.data.content);
  });
  dispatch(setConversations(conversations));
};

export const fetchRecommendedUsers = () => async (dispatch) => {
  const response = await client.get(Endpoint.USERS_RECOMMENDED, {
    params: { pageSize: 6 },
  });
  dispatch(setRecommendedUsers(response.data.content));
};

export const fetchMessages = () => async (dispatch, getState) => {
  const conversationId = getState().messaging.currentConversation.id;
  if (!conversationId) return;

  const response = await client.get(`${Endpoint.CHATS}/${conversationId}`);
  const messages = [...response.data.content];
  createRange(1, response.totalPages).forEach(async (page) => {
    const response = await client.get(`${Endpoint.CHATS}/${conversationId}`, {
      params: { page },
    });
    messages.push(response.data.content);
  });
  dispatch(setMessages(messages));
};

export const createMessage = (body) => async (getState) => {
  const conversationId = getState().messaging.currentConversation.id;
  const formData = new FormData();
  formData.append("body", body);
  await client.post(`${Endpoint.CHATS}/${conversationId}`, formData);
};

export const receiveMessage = (message) => async (dispatch, getState) => {
  const conversations = getState().messaging.conversations;
  const currentConversation = getState().messaging.currentConversation;
  const messages = getState().messaging.messages;

  const cutConversations = conversations.filter((entity) => entity.id !== message.chatId);
  const [conversation] = conversations.filter((entity) => entity.id === message.chatId);

  if (conversation) {
    const newConversation = JSON.parse(JSON.stringify(conversation));
    newConversation.lastMessage = message;
    dispatch(setConversations([newConversation, ...cutConversations]));
  } else {
    dispatch(fetchConversations());
  }
  if (currentConversation?.id === message.chatId) {
    dispatch(setMessages([...messages, message]));
  }
};

export const { setCurrentConversation, setShowDialog, setConversations } =
  messagingSlice.actions;
export const { setSearchResults, toggleUserSelection, clearDialogData } =
  messagingSlice.actions;
export const { setRecommendedUsers, setMessages } = messagingSlice.actions;
export default messagingSlice.reducer;
