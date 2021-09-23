import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PaymentsScreen from '../../screens/PaymentsScreen';

const PaymentsStack = createNativeStackNavigator();

export default PaymentsStackScreen = () => {
  return (
    <PaymentsStack.Navigator>
      <PaymentsStack.Screen name="Payments" component={PaymentsScreen} />
    </PaymentsStack.Navigator>
  );
};