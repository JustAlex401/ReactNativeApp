import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeStack, AccountsStack, GivingStack, PaymentsStack, CardsStack} from '../TabStack';
import DrawerMenu from '../../../Components/DrawerMenu';
import SavingsScreen from '../../../screens/Savings';
import CheckingScreen from '../../../screens/Checking';
import TabBar from '../../../Components/TabBar';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const TabStack = () => {
  return (
    <Tab.Navigator 
      screenOptions={{headerShown: false}} 
      tabBar={(props) => (<TabBar {...props}/>)}
    >
      <Tab.Screen
        name='Home'
        component={HomeStack}
      />
      <Tab.Screen
        name='Accounts'
        component={AccountsStack}
      />
      <Tab.Screen
        name='Giving'
        component={GivingStack}
      />
      <Tab.Screen
        name='Payments'
        component={PaymentsStack}
      />
      <Tab.Screen
        name='Cards'
        component={CardsStack}
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
      <Drawer.Screen
        name="CheckingScreen"
        component={CheckingScreen}
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