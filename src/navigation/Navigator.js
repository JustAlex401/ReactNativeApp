import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import AppStack from './stack/AppStack';
import AuthStack from './stack/AuthStack';
import { useSelector } from 'react-redux';
import { StatusBar } from 'react-native';
import globalStyles from '../../assets/styles';

const Stack = createStackNavigator();

const Navigator = () => {

  const token = useSelector(state => state?.userReducer?.data?.token);

  return (
    <>
      <StatusBar
        backgroundColor={globalStyles.themeColor}
      />
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
    </>
  );
};

export default Navigator;
