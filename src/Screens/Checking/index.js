import React from 'react';
import CheckingView from './CheckingView';

const CheckingScreen = (props) => {

  const handleNavigationGoBack = () => {
    props.navigation.goBack();
  };

  return (
    <CheckingView subtitle={props.route.params.subtitle} handleNavigationGoBack={handleNavigationGoBack}/>
  );
};

export default CheckingScreen;
