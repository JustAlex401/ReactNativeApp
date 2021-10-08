import React from 'react';
import AccountView from './AccountsView';

const AccountScreen = (props) => {

  const handleNavigationToScreen = (screenName, params) => {
    props.navigation.navigate(screenName, params ? params : null);
  };

  const handleOpenDrawer = () => {
    props.navigation.openDrawer();
  };

  return (
    <AccountView handleNavigationToScreen={handleNavigationToScreen} handleOpenDrawer={handleOpenDrawer}/>
  );
};

export default AccountScreen;
