import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'react-native';
import AppStack from './stack/AppStack';
import AuthStack from './stack/AuthStack';
import globalStyles from '../../assets/styles';
import useAuth from '../hooks/AuthHook';

const Stack = createStackNavigator();

const Navigator = () => {

  const isSignedIn = useAuth();
  
  return (
    <>
      <StatusBar
        backgroundColor={globalStyles.themeColor}
      />
      <Stack.Navigator>
        {isSignedIn ? 
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
    </>
  );
};

export default Navigator;
