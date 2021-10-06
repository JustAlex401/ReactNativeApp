import React from 'react';

import AboutScreen from '../../../Screens/About';
import HomeScreen from '../../../Screens/Home';
import { createStackNavigator } from '@react-navigation/stack';

const HomeStackElement = createStackNavigator();

export default HomeStack = () => {
  return (
    <HomeStackElement.Navigator screenOptions={{headerShown: false}}>
      <HomeStackElement.Screen name="HomeScreen" component={HomeScreen} />
      <HomeStackElement.Screen name="AboutScreen" component={AboutScreen} />
    </HomeStackElement.Navigator>
  );
};