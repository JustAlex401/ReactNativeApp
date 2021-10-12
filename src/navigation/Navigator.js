import React, { useEffect, useState } from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import AppStack from './stack/AppStack';
import AuthStack from './stack/AuthStack';
import { useSelector } from 'react-redux';

const Stack = createStackNavigator();

const Navigator = () => {

  const token = useSelector(state => {
    console.log(state);
    return state?.userReducer?.user?.data?.token});

  return (
    <Stack.Navigator >
      {token ? 
          <Stack.Screen
            name="App"
            component={AppStack}
            options={{headerShown: false}}
          />
        :
          <Stack.Screen
            name="Auth"
            component={AuthStack}
            options={{headerShown: false}}
          />
      }
    </Stack.Navigator>
  );
};

export default Navigator;
