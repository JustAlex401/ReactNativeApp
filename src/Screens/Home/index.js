import React from 'react';
import HomeView from './HomeView';

const HomeScreen = (props) => {

  const handlePressBtn = (screenName, params) => {
    props.navigation.navigate(screenName, params ? params : null);
  }

  return (
    <HomeView {...props} handlePressBtn={handlePressBtn}/>
  )
};

export default HomeScreen;
