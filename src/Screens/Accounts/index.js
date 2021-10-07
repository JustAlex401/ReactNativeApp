import React from 'react';
import AccountView from './AccountsView';

const AccountScreen = (props) => {

  const handlePressBtn = () => {
    props.navigation.navigate('SavingsScreen');
  }

  return (
    <AccountView {...props} handlePressBtn={handlePressBtn}/>
  );
};

export default AccountScreen;
