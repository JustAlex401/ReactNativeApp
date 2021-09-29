import React from 'react';

import AboutScreen from '../../../screens/about';
import HomeScreen from '../../../screens/home';
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