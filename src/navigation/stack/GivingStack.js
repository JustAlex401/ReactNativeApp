import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GivingScreen from '../../screens/giving';

const GivingStackElement = createNativeStackNavigator();

export default GivingStack = () => {
  return (
    <GivingStackElement.Navigator screenOptions={{headerShown: false}}>
      <GivingStackElement.Screen name="GivingScreen" component={GivingScreen} />
    </GivingStackElement.Navigator>
  );
};