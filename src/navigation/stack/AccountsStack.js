import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AccountsScreen from '../../screens/AccountsScreen';

const AccountsStackElement = createNativeStackNavigator();

export default AccountsStack = () => {
  return (
    <AccountsStackElement.Navigator>
      <AccountsStackElement.Screen name="Accounts" component={AccountsScreen} />
    </AccountsStackElement.Navigator>
  );
}