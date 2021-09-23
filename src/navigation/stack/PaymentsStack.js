import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PaymentsScreen from '../../screens/PaymentsScreen';

const PaymentsStackElement = createNativeStackNavigator();

export default PaymentsStack = () => {
  return (
    <PaymentsStackElement.Navigator>
      <PaymentsStackElement.Screen name="Payments" component={PaymentsScreen} />
    </PaymentsStackElement.Navigator>
  );
};