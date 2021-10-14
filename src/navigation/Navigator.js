import React, { useCallback, useEffect, useState } from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'react-native';
import AsyncStorage from "@react-native-community/async-storage";
import AppStack from './stack/AppStack';
import AuthStack from './stack/AuthStack';
import globalStyles from '../../assets/styles';

const Stack = createStackNavigator();

const Navigator = () => {

  const [token, setToken] = useState();

  const getToken = useCallback(async () => {
    try{
      const token = await AsyncStorage.getItem('id_token');
      setToken(token);
    } catch (err) {
      console.log('Get token error', err);
    }
  }, []);

  useEffect(() => {
    getToken();
  }, [getToken]);
  
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
