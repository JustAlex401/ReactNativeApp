import React, { useEffect, useState } from 'react';

import AnimatedSplash from "react-native-animated-splash-screen";
import MaskedViewIOS from '@react-native-community/masked-view';
import { Animated, Platform, View } from 'react-native';
import globalStyles from '../../../assets/styles';
import EStyleSheet from 'react-native-extended-stylesheet';

export default SplashScreen = ({children}) => {

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
      inputRange: [0, 15, 100],
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
                  source={require('../../../assets/icons/logo_splash_screen.png')}
                  style={[styles.logoSize, imageScale]}
                  resizeMode='contain'
                />
              </View>
            }>
              {whiteLayer}
              <Animated.View style={[globalStyles.flex, opacity]}>
                {children}
              </Animated.View>
            </MaskedViewIOS>
          </> 
        : 
          <AnimatedSplash
            translucent={false}
            isLoaded={isLoaded}
            logoImage={require("../../../assets/icons/logo_splash_screen.png")}
            backgroundColor={"#C71585"}
            logoHeight={150}
            logoWidth={150}
          >
            {children}
          </AnimatedSplash>
      }
    </View>
  );
};

const styles = EStyleSheet.create({
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