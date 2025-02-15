import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import CustomHeader from './component/CustomHeader';
import Sendbutton from './component/Sendbutton';
import {useDispatch, useSelector} from 'react-redux';
import {changeCurrentChatId} from './redux/reducers/chatSlice';

const MetaAI = () => {
  const dispatch = useDispatch();
  const chats = useSelector(state => state.chat.chats);
  const currentChatId = useSelector(state => state.chat.currentChatId);
  const [isTyping, setIsTyping] = useState(false);
  const [heightOfMessageBox, setHeightOfMessageBox] = useState(0);

  const setCurrentChatId = id => {
    dispatch(changeCurrentChatId({chatId: id}));
  };

  return (
    <ImageBackground
      source={require('./assets/w_bg.png')}
      style={styles.container}
      resizeMode="cover">
      <CustomHeader />
      <Sendbutton
        isTyping={isTyping}
        setIsTyping={setIsTyping}
        heightOfMessageBox={heightOfMessageBox}
        setHeightOfMessageBox={setHeightOfMessageBox}
        currentChatId={currentChatId}
        chats={chats}
        setCurrentChatId={id => setCurrentChatId(id)}
        lenght={
          chats?.find(chat => chat.id === currentChatId)?.messages.length ||
          [].length
        }
        messages={
          chats?.find(chat => chat.id === currentChatId)?.messages || []
        }
      />
    </ImageBackground>
  );
};

export default MetaAI;

const styles = StyleSheet.create({container: {flex: 1}});
