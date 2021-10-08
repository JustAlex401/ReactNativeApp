import React from 'react';
import GivingView from './GivingView';

const GivingScreen = (props) => {

  const handleOpenDrawer = () => {
    props.navigation.openDrawer();
  };

  return (
    <GivingView handleOpenDrawer={handleOpenDrawer}/>
  );
};

export default GivingScreen;
