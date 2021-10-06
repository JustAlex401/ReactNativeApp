import React from 'react';

import AccountsScreen from '../../../Screens/Accounts';
import { createStackNavigator } from '@react-navigation/stack';

const AccountsStackElement = createStackNavigator();

export default AccountsStack = () => {
  return (
    <AccountsStackElement.Navigator screenOptions={{headerShown: false}}>
      <AccountsStackElement.Screen name="AccountsScreen" component={AccountsScreen} />
    </AccountsStackElement.Navigator>
  );
}