import React from 'react';

import GivingScreen from '../../../screens/giving';
import { createStackNavigator } from '@react-navigation/stack';

const GivingStackElement = createStackNavigator();

export default GivingStack = () => {
  return (
    <GivingStackElement.Navigator screenOptions={{headerShown: false}}>
      <GivingStackElement.Screen name="GivingScreen" component={GivingScreen} />
    </GivingStackElement.Navigator>
  );
};