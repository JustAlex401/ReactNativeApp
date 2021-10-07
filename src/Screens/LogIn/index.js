import React, { useEffect, useState } from 'react';
import { Keyboard } from 'react-native';
import LogInView from './LogInView';

const LogInScreen = (props) => {

  const [isKeyboardOpen, setKeyboardStatus] = useState(false);

  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardStatus(true);
    });
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardStatus(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);


  return (
    <LogInView {...props} isKeyboardOpen={isKeyboardOpen}/>
  )
};

export default LogInScreen;
