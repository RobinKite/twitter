import { createSlice } from "@reduxjs/toolkit";

const messagesSlice = createSlice({
  name: "messages",
  initialState: {
    chats: [],
  },
  reducers: {},
});

export default messagesSlice.reducer;
