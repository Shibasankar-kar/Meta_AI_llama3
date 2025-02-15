import {useEffect, useState} from 'react';
import { Keyboard } from 'react-native';

export default useKeyboardOffsetHeight = () => {
  const [keyboardOffsetHeight, setKeyboardOffsetHeight] = useState(0);

  useEffect(() => {
    const keyboardAndroidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      e => {
        setKeyboardOffsetHeight(e.endCoordinates.height);
      },
    );

    const keyboardAndroidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardOffsetHeight(0);
      },
    );

    const keyboardIosShowListener = Keyboard.addListener(
      'keyboardWillShow',
      e => {
        setKeyboardOffsetHeight(e.endCoordinates.height);
      },
    );

    const keyboardIosHideListener = Keyboard.addListener(
      'keyboardWillHide',
      () => {
        setKeyboardOffsetHeight(0);
      },
    );

    return () => {
      keyboardAndroidShowListener.remove();
      keyboardAndroidHideListener.remove();
      keyboardIosShowListener.remove();
      keyboardIosHideListener.remove();
    };
  }, []);
  return keyboardOffsetHeight;
};
