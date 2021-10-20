import React from 'react';
import PaymentsView from './PaymentsView';

const PaymentsScreen = (props) => {

  const handleOpenDrawer = () => {
    props.navigation.openDrawer();
  };

  const handleNavigationToScreen = (screenName, params) => {
    props.navigation.navigate(screenName, params ? params : null);
  };

  return (
    <PaymentsView 
      handleOpenDrawer={handleOpenDrawer}
      handleNavigationToScreen={handleNavigationToScreen}
    />
  )
};

export default PaymentsScreen;
