import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AboutScreen from '../../screens/AboutScreen';
import HomeScreen from '../../screens/HomeScreen';

const HomeStackElement = createNativeStackNavigator();

export default HomeStack = () => {
  return (
    <HomeStackElement.Navigator>
      <HomeStackElement.Screen name="Home" component={HomeScreen} />
      <HomeStackElement.Screen name="About" component={AboutScreen} />
    </HomeStackElement.Navigator>
  );
};