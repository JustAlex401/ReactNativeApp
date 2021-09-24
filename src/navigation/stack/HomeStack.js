import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AboutScreen from '../../screens/about';
import HomeScreen from '../../screens/home';

const HomeStackElement = createNativeStackNavigator();

export default HomeStack = () => {
  return (
    <HomeStackElement.Navigator screenOptions={{headerShown: false}}>
      <HomeStackElement.Screen name="Home" component={HomeScreen} />
      <HomeStackElement.Screen name="About" component={AboutScreen} />
    </HomeStackElement.Navigator>
  );
};