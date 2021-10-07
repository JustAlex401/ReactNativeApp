import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import globalStyles from '../../../assets/styles';
import HomeStack from './TabStack/HomeStack.js';
import AccountsStack from './TabStack/AccountsStack.js';
import GivingStack from './TabStack/GivingStack.js';
import PaymentsStack from './TabStack/PaymentsStack.js';
import CardsStack from './TabStack/CardsStack.js';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import DrawerMenu from '../../Components/DrawerMenu';
import SavingsScreen from '../../Screens/Savings';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const TabStack = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name='Home'
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
          tabBarActiveTintColor: globalStyles.themeColor,
          tabBarInactiveTintColor: globalStyles.defaultColor,
          tabBarIcon: ({ focused }) => (
            <Image source={require('../../../assets/icons/home.png')} style={{ tintColor: focused ? globalStyles.themeColor : globalStyles.defaultColor }} />
          )
        }}  
      />
      <Tab.Screen
        name='Accounts'
        component={AccountsStack}
        options={{
          tabBarLabel: 'Accounts',
          tabBarActiveTintColor: globalStyles.themeColor,
          tabBarInactiveTintColor: globalStyles.defaultColor,
          tabBarIcon: ({ focused }) => (
            <Image source={require('../../../assets/icons/accounts.png')} style={{ tintColor: focused ? globalStyles.themeColor : globalStyles.defaultColor }} />
          )
        }}  
      />
      <Tab.Screen
        name='Giving'
        component={GivingStack}
        options={{
          tabBarLabel: 'Giving',
          tabBarActiveTintColor: globalStyles.themeColor,
          tabBarInactiveTintColor: globalStyles.defaultColor,
          tabBarIcon: ({ focused }) => (
            <Image source={require('../../../assets/icons/giving.png')} style={{ tintColor: focused ? globalStyles.themeColor : globalStyles.defaultColor }} />
          )
        }}  
      />
      <Tab.Screen
        name='Payments'
        component={PaymentsStack}
        options={{
          tabBarLabel: 'Payments',
          tabBarActiveTintColor: globalStyles.themeColor,
          tabBarInactiveTintColor: globalStyles.defaultColor,
          tabBarIcon: ({ focused }) => (
            <Image source={require('../../../assets/icons/payment.png')} style={{ tintColor: focused ? globalStyles.themeColor : globalStyles.defaultColor }} />
          )
        }}  
      />
      <Tab.Screen
        name='Cards'
        component={CardsStack}
        options={{
          tabBarLabel: 'Cards',
          tabBarActiveTintColor: globalStyles.themeColor,
          tabBarInactiveTintColor: globalStyles.defaultColor,
          tabBarIcon: ({ focused }) => (
            <Image source={require('../../../assets/icons/cards.png')} style={{ tintColor: focused ? globalStyles.themeColor : globalStyles.defaultColor }} />
          )
        }}  
      />
    </Tab.Navigator>
  );
};

const DrawerStack = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: 'slide',
        drawerPosition: 'left'
      }}
      drawerContent={props => <DrawerMenu {...props}/>}
    >
      <Drawer.Screen
        name="TabStack"
        component={TabStack}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="SavingsScreen"
        component={SavingsScreen}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
};

export default AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="DrawerStack" component={DrawerStack}/>
    </Stack.Navigator>
  );
};