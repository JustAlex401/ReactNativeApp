import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GivingScreen from '../../screens/GivingScreen';

const GivingStackElement = createNativeStackNavigator();

export default GivingStack = () => {
  return (
    <GivingStackElement.Navigator>
      <GivingStackElement.Screen name="Giving" component={GivingScreen} />
    </GivingStackElement.Navigator>
  );
};