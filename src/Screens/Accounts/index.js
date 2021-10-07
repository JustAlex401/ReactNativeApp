import React from 'react';
import AccountView from './AccountsView';

const AccountScreen = (props) => {

  const handlePressBtn = (screenName) => {
    props.navigation.navigate(screenName);
  }

  return (
    <AccountView {...props} handlePressBtn={handlePressBtn}/>
  );
};

export default AccountScreen;
