import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AboutScreen from '../screens/AboutScreen';
import HomeScreen from '../screens/HomeScreen';
import AccountScreen from '../screens/AccountScreen';

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="About" component={AboutScreen} />
    </HomeStack.Navigator>
  );
};

const AccountStack = createNativeStackNavigator();

function AccountStackScreen() {
  return (
    <AccountStack.Navigator>
      <AccountStack.Screen name="Account" component={AccountScreen} />
    </AccountStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

const Navigator = () => {

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Account" component={AccountStackScreen}></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
