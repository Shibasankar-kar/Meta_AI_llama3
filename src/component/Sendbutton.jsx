import {
  Animated,
  Dimensions,
  Platform,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import useKeyboardOffsetHeight from '../helpers/useKeyboardOffsetHeight';
import {useDispatch, useSelector} from 'react-redux';
import {PaperAirplaneIcon} from 'react-native-heroicons/solid';
import uuid from 'react-native-uuid';
import {createNewChat} from '../redux/reducers/chatSlice';

const windowHeight = Dimensions.get('window').height;

const Sendbutton = ({
  isTyping,
  setIsTyping,
  heightOfMessageBox,
  setHeightOfMessageBox,
  currentChatId,
  chats,
  selectCurrentChatId,
  lenght,
  messages,
}) => {
  const dispatch = useDispatch();
  const AnimatedValue = useRef(new Animated.Value(0)).current;

  const [message, setMessage] = useState('');
  const keyboardOffsetHeight = useKeyboardOffsetHeight();
  const handelTextChange = text => {
    setIsTyping(!!text);
    setMessage(text);
  };

  const handelContentSizeChange = event => {
    const {height} = event.nativeEvent.contentSize;
    setHeightOfMessageBox(height);
  };

  useEffect(() => {
    Animated.timing(AnimatedValue, {
      toValue: isTyping ? 1 : 0,
      duration: 600,
      useNativeDriver: true,
    }).start();
  }, [isTyping]);

  const sendbuttonStyle = {
    opacity: AnimatedValue,
    transform: [
      {
        translateY: AnimatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: [0.5, 1],
        }),
      },
    ],
  };

  return (
    <View
      style={[
        styles.container,
        {
          bottom:
            Platform.OS == 'android'
              ? windowHeight * 0.02
              : Math.max(keyboardOffsetHeight, windowHeight * 0.02),
        },
      ]}>
      <View style={styles.subContainer}>
        <View
          style={[styles.inputContainer, {width: isTyping ? '87%' : '100%'}]}>
          <TextInput
            editable
            multiline={true}
            placeholder="Enter your Prompt..."
            onChangeText={handelTextChange}
            style={styles.textInput}
            value={message}
            onContentSizeChange={handelContentSizeChange}
          />
        </View>
        {isTyping && (
          <Animated.View style={[styles.sendbuttonWrapper, sendbuttonStyle]}>
            <TouchableOpacity
              style={styles.sendButton}
              onPress={async () => {
                const chatIndex = chats.findIndex(
                  chat => chat.id === currentChatId,
                );
                if (chatIndex === -1) {
                  let newId = uuid.v4();
                  selectCurrentChatId(newId);
                  // await dispatch(
                  //   createNewChat({
                  //     chatId: newId,
                  //     message: [],
                  //     summery: 'New Chat',
                  //   }),
                  // );
                  // await console.log('hi');
                  console.log('new chat')
                }
              }}>
              <PaperAirplaneIcon color="#000" />
            </TouchableOpacity>
          </Animated.View>
        )}
      </View>
    </View>
  );
};
export default Sendbutton;

const styles = StyleSheet.create({
  container: {
    minHeight: windowHeight * 0.06,
    maxHeight: windowHeight * 0.4,
    width: '98%',
    alignContent: 'center',
    padding: 10,
    paddingHorizontal: '1%',
    position: 'absolute',
    right: 0,
    left: 0,
  },
  subContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  inputContainer: {
    maxHeight: windowHeight * 0.2,
    backgroundColor: '#232626',
    margin: '1%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: '1%',
    borderRadius: 20,
  },
  textInput: {
    width: '98%',
    padding: 10,
    marginHorizontal: '2%',
    fontSize: RFValue(13),
    color: '#fff',
  },
  sendbuttonWrapper: {
    position: 'absolute',
    right: 0,
    bottom: 6,
    width: '11%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendButton: {
    backgroundColor: '#22c063',
    borderRadius: 42,
    height: 42,
    width: 42,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
