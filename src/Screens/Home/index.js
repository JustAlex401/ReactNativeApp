import React from 'react';
import HomeView from './HomeView';

const HomeScreen = (props) => {

  const handlePressBtn = (screenName) => {
    props.navigation.navigate(screenName);
  }

  return (
    <HomeView {...props} handlePressBtn={handlePressBtn}/>
  )
};

export default HomeScreen;
