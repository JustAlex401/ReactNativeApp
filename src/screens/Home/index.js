import React from 'react';
import HomeView from './HomeView';

const HomeScreen = (props) => {

  const handleNavigationToScreen = (screenName, params) => {
    props.navigation.navigate(screenName, params ? params : null);
  };

  const handleOpenDrawer = () => {
    props.navigation.openDrawer();
  };

  return (
    <HomeView handleOpenDrawer={handleOpenDrawer} handleNavigationToScreen={handleNavigationToScreen}/>
  );
};

export default HomeScreen;
