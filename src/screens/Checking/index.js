import React from 'react';
import CheckingView from './CheckingView';

const CheckingScreen = (props) => {

  const handleNavigationGoBack = () => {
    props.navigation.goBack();
  };

  const handleNavigationToScreen = (screenName, params) => {
    props.navigation.navigate(screenName, params ? params : null);
  };

  return (
    <CheckingView 
      subtitle={props.route.params.subtitle} 
      handleNavigationGoBack={handleNavigationGoBack}
      handleNavigationToScreen={handleNavigationToScreen}
    />
  );
};

export default CheckingScreen;
