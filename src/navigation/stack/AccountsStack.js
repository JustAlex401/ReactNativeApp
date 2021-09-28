import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AccountsScreen from '../../screens/accounts';

const AccountsStackElement = createNativeStackNavigator();

export default AccountsStack = () => {
  return (
    <AccountsStackElement.Navigator screenOptions={{headerShown: false}}>
      <AccountsStackElement.Screen name="AccountsScreen" component={AccountsScreen} />
    </AccountsStackElement.Navigator>
  );
}