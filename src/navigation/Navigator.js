import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { Platform, StatusBar, View } from 'react-native';
import AppStack from './stack/AppStack';
import AuthStack from './stack/AuthStack';
import globalStyles from '../../assets/styles';
import useAuth from '../hooks/AuthHook';
import EStyleSheet from 'react-native-extended-stylesheet';

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 48 : 0;
const Stack = createStackNavigator();

const Navigator = () => {
  const isSignedIn = useAuth();
  
  return (
    <>
      <View style={styles.statusBar}>
        <StatusBar backgroundColor={globalStyles.themeColor}/>
      </View>
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

const styles = EStyleSheet.create({
  statusBar: {
    flex: 0, 
    height: STATUSBAR_HEIGHT, 
    backgroundColor: globalStyles.themeColor
  }
});

export default Navigator;