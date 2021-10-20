import React from 'react';
import CardsView from './CardsView';

const CardsScreen = (props) => {

  const handleOpenDrawer = () => {
    props.navigation.openDrawer();
  };

  const handleNavigationToScreen = (screenName, params) => {
    props.navigation.navigate(screenName, params ? params : null);
  };

  return (
    <CardsView 
      handleOpenDrawer={handleOpenDrawer}
      handleNavigationToScreen={handleNavigationToScreen}
    />
  );
};

export default CardsScreen;
