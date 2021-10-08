import React from 'react';

import PaymentsScreen from '../../../screens/Payments';
import { createStackNavigator } from '@react-navigation/stack';

const PaymentsStackElement = createStackNavigator();

export default PaymentsStack = () => {
  return (
    <PaymentsStackElement.Navigator screenOptions={{headerShown: false}}>
      <PaymentsStackElement.Screen name="PaymentsScreen" component={PaymentsScreen} />
    </PaymentsStackElement.Navigator>
  );
};