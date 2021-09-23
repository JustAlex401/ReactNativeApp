import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GivingScreen from '../../screens/GivingScreen';

const GivingStack = createNativeStackNavigator();

export default GivingStackScreen = () => {
  return (
    <GivingStack.Navigator>
      <GivingStack.Screen name="Giving" component={GivingScreen} />
    </GivingStack.Navigator>
  );
};