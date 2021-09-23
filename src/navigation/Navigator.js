import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
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
            tabBarActiveTintColor: EStyleSheet.value('$iconColor'),
            tabBarInactiveTintColor: EStyleSheet.value('$defaultColor'),
            tabBarIcon: ({ focused }) => (
              <Image source={require('../assets/icons/home.png')} style={{ tintColor: focused ? EStyleSheet.value('$iconColor') : EStyleSheet.value('$defaultColor') }} />
            )
          }}  
        />
        <Tab.Screen
          name='Accounts'
          component={AccountsStack}
          options={{
            tabBarLabel: 'Accounts',
            tabBarActiveTintColor: EStyleSheet.value('$iconColor'),
            tabBarInactiveTintColor: EStyleSheet.value('$defaultColor'),
            tabBarIcon: ({ focused }) => (
              <Image source={require('../assets/icons/accounts.png')} style={{ tintColor: focused ? EStyleSheet.value('$iconColor') : EStyleSheet.value('$defaultColor') }} />
            )
          }}  
        />
        <Tab.Screen
          name='Giving'
          component={GivingStack}
          options={{
            tabBarLabel: 'Giving',
            tabBarActiveTintColor: EStyleSheet.value('$iconColor'),
            tabBarInactiveTintColor: EStyleSheet.value('$defaultColor'),
            tabBarIcon: ({ focused }) => (
              <Image source={require('../assets/icons/giving.png')} style={{ tintColor: focused ? EStyleSheet.value('$iconColor') : EStyleSheet.value('$defaultColor') }} />
            )
          }}  
        />
        <Tab.Screen
          name='Payments'
          component={PaymentsStack}
          options={{
            tabBarLabel: 'Payments',
            tabBarActiveTintColor: EStyleSheet.value('$iconColor'),
            tabBarInactiveTintColor: EStyleSheet.value('$defaultColor'),
            tabBarIcon: ({ focused }) => (
              <Image source={require('../assets/icons/payment.png')} style={{ tintColor: focused ? EStyleSheet.value('$iconColor') : EStyleSheet.value('$defaultColor') }} />
            )
          }}  
        />
        <Tab.Screen
          name='Cards'
          component={CardsStack}
          options={{
            tabBarLabel: 'Cards',
            tabBarActiveTintColor: EStyleSheet.value('$iconColor'),
            tabBarInactiveTintColor: EStyleSheet.value('$defaultColor'),
            tabBarIcon: ({ focused }) => (
              <Image source={require('../assets/icons/cards.png')} style={{ tintColor: focused ? EStyleSheet.value('$iconColor') : EStyleSheet.value('$defaultColor') }} />
            )
          }}  
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
