import React from 'react';
import SavingsView from './SavingsView';

const SavingsScreen = (props) => {

  const handleNavigationGoBack = () => {
    props.navigation.goBack();
  }

  return (
    <SavingsView subtitle={props.route.params.subtitle} handleNavigationGoBack={handleNavigationGoBack}/>
  )
};

export default SavingsScreen;
