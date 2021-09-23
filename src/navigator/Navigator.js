import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import router from './Roter.js';

const Tab = createBottomTabNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        {
          router.map((item, index) => {
            return (
              <Tab.Screen
                name={item.name}
                component={item.component} 
                key={index}
                options={{
                  tabBarLabel: item.labelName,
                  tabBarActiveTintColor: EStyleSheet.value('$iconColor'),
                  tabBarInactiveTintColor: EStyleSheet.value('$defaultColor'),
                  tabBarIcon: ({ focused }) => (
                    <Image source={item.icon} style={{ tintColor: focused ? EStyleSheet.value('$iconColor') : EStyleSheet.value('$defaultColor') }} />
                  )
                }}  
              />
            )
          })
        }
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
