import React from 'react';
import HomeView from './HomeView';

const HomeScreen = (props) => {

  const handlePressBtn = () => {
    props.navigation.navigate('AboutScreen');
  }

  return (
    <HomeView {...props} handlePressBtn={handlePressBtn}/>
  )
};

export default HomeScreen;
