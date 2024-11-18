import {combineReducers} from 'redux';
import chatSlice from './reducers/chatSlice';

export const rootReducer = combineReducers({
  chat: chatSlice,
});
