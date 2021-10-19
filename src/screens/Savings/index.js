import React from 'react';
import SavingsView from './SavingsView';

const SavingsScreen = (props) => {

  const handleNavigationGoBack = () => {
    props.navigation.goBack();
  };

  const handleNavigationToScreen = (screenName, params) => {
    props.navigation.navigate(screenName, params ? params : null);
  };

  return (
    <SavingsView 
      subtitle={props.route.params.subtitle} 
      handleNavigationGoBack={handleNavigationGoBack}
      handleNavigationToScreen={handleNavigationToScreen}
    />
  );
};

export default SavingsScreen;
