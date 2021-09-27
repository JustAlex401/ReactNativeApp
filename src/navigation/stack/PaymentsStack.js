import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PaymentsScreen from '../../screens/payments';

const PaymentsStackElement = createNativeStackNavigator();

export default PaymentsStack = () => {
  return (
    <PaymentsStackElement.Navigator screenOptions={{headerShown: false}}>
      <PaymentsStackElement.Screen name="PaymentsScreen" component={PaymentsScreen} />
    </PaymentsStackElement.Navigator>
  );
};