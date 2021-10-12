import React, { useEffect, useState } from 'react';
import { Keyboard } from 'react-native';
import { useDispatch } from 'react-redux';
import { loginUser } from './actions';
import LogInView from './LogInView';

const LogInScreen = (props) => {

  const [isKeyboardOpen, setKeyboardStatus] = useState(false);
  const [userLogInData, setUserLogInData] = useState({
    email: '',
    password: ''
  });
  const dispatch = useDispatch();

  const handleLogIn = () => {
    dispatch(loginUser(userLogInData));
  };

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
    <LogInView 
      isKeyboardOpen={isKeyboardOpen} 
      userLogInData={userLogInData} 
      setUserLogInData={setUserLogInData}
      handleLogIn={handleLogIn}
    />
  )
};

export default LogInScreen;
