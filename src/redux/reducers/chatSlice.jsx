import {createSlice} from '@reduxjs/toolkit';

const initialState = {chats: [], currentChatId: ''};

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    clearAllChats: state => {
      state.chats = [];
    },
  },
});

export const {clearAllChats} = chatSlice.actions;
export default chatSlice.reducer;
export const selectedChat = state => state.chat.chats;
export const currentChatId = state => state.chat.currentChatId;
