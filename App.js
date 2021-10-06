import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import EStyleSheet from 'react-native-extended-stylesheet';
import Navigator from './src/Navigation/Navigator';

EStyleSheet.build({});

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Navigator/>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
