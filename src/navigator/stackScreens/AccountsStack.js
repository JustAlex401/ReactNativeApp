import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AccountsScreen from '../../screens/AccountsScreen';

const AccountsStack = createNativeStackNavigator();

export default AccountsStackScreen = () => {
  return (
    <AccountsStack.Navigator>
      <AccountsStack.Screen name="Accounts" component={AccountsScreen} />
    </AccountsStack.Navigator>
  );
}