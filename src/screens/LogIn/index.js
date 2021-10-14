import React, { useEffect, useState } from 'react';
import { Keyboard } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from './actions';
import LogInView from './LogInView';

const LogInScreen = (props) => {

  const [isKeyboardOpen, setKeyboardStatus] = useState(false);
  const [userLogInData, setUserLogInData] = useState({
    email: '',
    password: ''
  });
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [emailIsInvalide, setEmailIsInvalide] = useState(false);
  const [passwordIsInvalide, setPasswordIsInvalide] = useState(false);
  const loginError = useSelector(state => state?.userReducer?.error);

  const handleLogIn = () => {
    setLoading(true);
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });

    promise.then(
      () => {
        dispatch(loginUser(userLogInData));
        setLoading(false);
      },
      error => console.log('promise error', error))
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

  const validateEmail = (email) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(email) === false) {
      setEmailIsInvalide(true);
    } else {
      setEmailIsInvalide(false);
    };
    setUserLogInData({...userLogInData, email: email});
  };

  const validatePassword = (password) => {
    if (password.length < 5) {
      setPasswordIsInvalide(true);
    } else {
      setPasswordIsInvalide(false);
    };
    setUserLogInData({...userLogInData, password: password});
  };

  return (
    <LogInView 
      isKeyboardOpen={isKeyboardOpen} 
      userLogInData={userLogInData}
      handleLogIn={handleLogIn}
      loading={loading}
      validateEmail={validateEmail}
      emailIsInvalide={emailIsInvalide}
      validatePassword={validatePassword}
      passwordIsInvalide={passwordIsInvalide}
      loginError={loginError}
    />
  )
};

export default LogInScreen;
