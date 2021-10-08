import React from 'react';
import CardsView from './CardsView';

const CardsScreen = (props) => {

  const handleOpenDrawer = () => {
    props.navigation.openDrawer();
  };

  return (
    <CardsView handleOpenDrawer={handleOpenDrawer}/>
  );
};

export default CardsScreen;
