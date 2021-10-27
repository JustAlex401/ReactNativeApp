import React, { useEffect, useState } from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { Platform, StatusBar, View, Animated } from 'react-native';
import AnimatedSplash from "react-native-animated-splash-screen";
import MaskedViewIOS from '@react-native-community/masked-view';
import AppStack from './stack/AppStack';
import AuthStack from './stack/AuthStack';
import globalStyles from '../../assets/styles';
import useAuth from '../hooks/AuthHook';
import EStyleSheet from 'react-native-extended-stylesheet';

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 48 : 0;

const Stack = createStackNavigator();

const NavigatorView = () => {
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
}

const Navigator = () => {

  const [isLoaded, setLoaded] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(new Animated.Value(0));
  const [animationDone, setAnimationDone] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 3000)
  }, []);

  useEffect(() => {
    Animated.timing(loadingProgress, {
      toValue: 100,
      duration: 1000,
      useNativeDriver: true,
      delay: 400
    }).start(() => {
      setAnimationDone(true);
    });
  }, []);

  const colorLayer = animationDone ? null : <View style={[EStyleSheet.absoluteFill, styles.colorLayer]} />;
  const whiteLayer = animationDone ? null : <View style={[EStyleSheet.absoluteFill, styles.whiteLayer]} />;
  const imageScale = {
    transform: [
      {
        scale: loadingProgress.interpolate({
          inputRange: [0, 15, 100],
          outputRange: [0.3, 0.06, 16]
        })
      }
    ]
  };

  const opacity = {
    opacity: loadingProgress.interpolate({
      inputRange: [0, 25, 50],
      outputRange: [0, 0, 1],
      extrapolate: 'clamp'
    })
  };
  
  return (
    <View style={globalStyles.flex}>
      {Platform.OS === 'ios' ? 
          <>
            {colorLayer}
            <MaskedViewIOS style={globalStyles.flex} maskElement={
              <View style={styles.centered}>
                <Animated.Image 
                  source={require('../../assets/icons/logo_splash_screen.png')}
                  style={[styles.logoSize, imageScale]}
                  resizeMode='contain'
                />
              </View>
            }>
              {whiteLayer}
              <Animated.View style={[globalStyles.flex, opacity]}>
                <NavigatorView/>
              </Animated.View>
            </MaskedViewIOS>
          </> 
        : 
          <AnimatedSplash
            translucent={false}
            isLoaded={isLoaded}
            logoImage={require("../../assets/icons/logo_splash_screen.png")}
            backgroundColor={"#C71585"}
            logoHeight={150}
            logoWidth={150}
          >
            <NavigatorView/>
          </AnimatedSplash>
      }
    </View>
  );
};

const styles = EStyleSheet.create({
  statusBar: {
    flex: 0, 
    height: STATUSBAR_HEIGHT, 
    backgroundColor: globalStyles.themeColor
  },
  centered: {
    flex: 1,
    alignItems: 'center', 
    justifyContent: 'center'
  },
  logoSize: {
    width: 1000
  },
  colorLayer: {
    backgroundColor: '#C71585'
  },
  whiteLayer: {
    backgroundColor: '#FFF'
  }
});

export default Navigator;