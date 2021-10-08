import React from 'react';
import PaymentsView from './PaymentsView';

const PaymentsScreen = (props) => {

  const handleOpenDrawer = () => {
    props.navigation.openDrawer();
  };

  return (
    <PaymentsView handleOpenDrawer={handleOpenDrawer}/>
  )
};

export default PaymentsScreen;
