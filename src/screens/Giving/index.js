import React from 'react';
import GivingView from './GivingView';

const GivingScreen = (props) => {

  const handleOpenDrawer = () => {
    props.navigation.openDrawer();
  };

  const handleNavigationToScreen = (screenName, params) => {
    props.navigation.navigate(screenName, params ? params : null);
  };

  return (
    <GivingView 
      handleOpenDrawer={handleOpenDrawer}
      handleNavigationToScreen={handleNavigationToScreen}
    />
  );
};

export default GivingScreen;
