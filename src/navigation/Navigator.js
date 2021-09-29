import React, { useState } from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import CustomText from '../components/CustomText';
import AppStack from './stack/AppStack';

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
            component={() => <CustomText>You do not sign in</CustomText>}
            options={{headerShown: false}}
          />
      }
    </Stack.Navigator>
  );
};

export default Navigator;
