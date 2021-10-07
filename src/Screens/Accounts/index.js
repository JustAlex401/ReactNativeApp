import React from 'react';
import AccountView from './AccountsView';

const AccountScreen = (props) => {

  const handlePressBtn = (screenName, params) => {
    props.navigation.navigate(screenName, params ? params : null);
  }

  return (
    <AccountView {...props} handlePressBtn={handlePressBtn}/>
  );
};

export default AccountScreen;
