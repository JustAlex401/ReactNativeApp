import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import LogInScreen from '../../screens/logIn';

const Stack = createStackNavigator();

export default AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="LogIn" component={LogInScreen}/>
    </Stack.Navigator>
  );
};