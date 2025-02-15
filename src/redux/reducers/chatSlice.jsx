import {createSlice} from '@reduxjs/toolkit';

const initialState = {chats: [], currentChatId: ''};

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    clearAllChats: state => {
      state.chats = [];
    },
    changeCurrentChatId: (state, action) => {
      state.currentChatId = action.payload.chatId;
    },
    createNewChat: (state, action) => {
      const {chatId, message, summery} = action.payload;
      
      state.chats.push({id: chatId, message, summery});
    },
  },
});

export const {clearAllChats, changeCurrentChatId, createNewChat} =
  chatSlice.actions;
export default chatSlice.reducer;
