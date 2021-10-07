import React, { useState } from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import AppStack from './Stack/AppStack';
import AuthStack from './Stack/AuthStack';

const Stack = createStackNavigator();

const Navigator = () => {

  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <Stack.Navigator >
      {isSignIn ? 
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
