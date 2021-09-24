import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import customStyles from '../../assets/styles';
import HomeStack from './stack/HomeStack.js';
import AccountsStack from './stack/AccountsStack.js';
import GivingStack from './stack/GivingStack.js';
import PaymentsStack from './stack/PaymentsStack.js';
import CardsStack from './stack/CardsStack.js';

const Tab = createBottomTabNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen
          name='Home'
          component={HomeStack}
          options={{
            tabBarLabel: 'Home',
            tabBarActiveTintColor: customStyles.themeColor,
            tabBarInactiveTintColor: customStyles.defaultColor,
            tabBarIcon: ({ focused }) => (
              <Image source={require('../../assets/icons/home.png')} style={{ tintColor: focused ? customStyles.themeColor : customStyles.defaultColor }} />
            )
          }}  
        />
        <Tab.Screen
          name='Accounts'
          component={AccountsStack}
          options={{
            tabBarLabel: 'Accounts',
            tabBarActiveTintColor: customStyles.themeColor,
            tabBarInactiveTintColor: customStyles.defaultColor,
            tabBarIcon: ({ focused }) => (
              <Image source={require('../../assets/icons/accounts.png')} style={{ tintColor: focused ? customStyles.themeColor : customStyles.defaultColor }} />
            )
          }}  
        />
        <Tab.Screen
          name='Giving'
          component={GivingStack}
          options={{
            tabBarLabel: 'Giving',
            tabBarActiveTintColor: customStyles.themeColor,
            tabBarInactiveTintColor: customStyles.defaultColor,
            tabBarIcon: ({ focused }) => (
              <Image source={require('../../assets/icons/giving.png')} style={{ tintColor: focused ? customStyles.themeColor : customStyles.defaultColor }} />
            )
          }}  
        />
        <Tab.Screen
          name='Payments'
          component={PaymentsStack}
          options={{
            tabBarLabel: 'Payments',
            tabBarActiveTintColor: customStyles.themeColor,
            tabBarInactiveTintColor: customStyles.defaultColor,
            tabBarIcon: ({ focused }) => (
              <Image source={require('../../assets/icons/payment.png')} style={{ tintColor: focused ? customStyles.themeColor : customStyles.defaultColor }} />
            )
          }}  
        />
        <Tab.Screen
          name='Cards'
          component={CardsStack}
          options={{
            tabBarLabel: 'Cards',
            tabBarActiveTintColor: customStyles.themeColor,
            tabBarInactiveTintColor: customStyles.defaultColor,
            tabBarIcon: ({ focused }) => (
              <Image source={require('../../assets/icons/cards.png')} style={{ tintColor: focused ? customStyles.themeColor : customStyles.defaultColor }} />
            )
          }}  
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
