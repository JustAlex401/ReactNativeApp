import React, { useEffect, useState } from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { Platform, StatusBar, View } from 'react-native';
import AnimatedSplash from "react-native-animated-splash-screen";
import AppStack from './stack/AppStack';
import AuthStack from './stack/AuthStack';
import globalStyles from '../../assets/styles';
import useAuth from '../hooks/AuthHook';
import EStyleSheet from 'react-native-extended-stylesheet';

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 48 : 0;

const Stack = createStackNavigator();

const Navigator = () => {

  const [isLoaded, setLoaded] = useState(false);
  const isSignedIn = useAuth();

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 3000)
  }, []);
  
  return (
    <View style={globalStyles.flex}>
      <AnimatedSplash
        translucent={false}
        isLoaded={isLoaded}
        logoImage={require("../../assets/icons/logo_splash_screen.png")}
        backgroundColor={"#C71585"}
        logoHeight={150}
        logoWidth={150}
      >
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
      </AnimatedSplash>
    </View>
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