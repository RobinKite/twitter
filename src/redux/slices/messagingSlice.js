import { createSlice } from "@reduxjs/toolkit";
import { Endpoint } from "@/constants";
import { client } from "@/services";
import { createRange } from "@/utils";

const createFieldSetter = (fieldName) => (state, action) => {
  state[fieldName] = action.payload;
};

const messagingSlice = createSlice({
  name: "messaging",
  initialState: {
    showDialog: false,
    selectedUsers: [],
    searchResults: [],
    conversations: null,
    currentConversation: null,
  },
  reducers: {
    setSearchResults: createFieldSetter("searchResults"),
    setCurrentConversation: createFieldSetter("currentConversation"),
    setShowDialog: createFieldSetter("showDialog"),
    setConversations: createFieldSetter("conversations"),
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

export const createConversation = (users) => async (dispatch, getState) => {
  const userIds = users.map((user) => user.id);
  const response = await client.post(Endpoint.CHATS, { name: "default", userIds });
  const conversations = getState().messaging.conversations;
  dispatch(setConversations([response.data, ...conversations]));
  dispatch(setCurrentConversation(response.data));
  dispatch(clearDialogData());
};

export const deleteConversation = (id) => async (dispatch, getState) => {
  await client.delete(Endpoint.CHATS, { params: { id } });
  const conversations = getState().messaging.conversations.filter(
    (conversation) => conversation.id !== id,
  );
  dispatch(setCurrentConversation(null));
  dispatch(setConversations(conversations));
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

export const { setCurrentConversation, setShowDialog, setConversations } =
  messagingSlice.actions;
export const { setSearchResults, toggleUserSelection, clearDialogData } =
  messagingSlice.actions;
export default messagingSlice.reducer;
