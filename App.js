import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import EStyleSheet from 'react-native-extended-stylesheet';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import Navigator from './src/navigation/Navigator';
import { store, persistor } from './src/redux/store';
import SplashScreen from './src/components/SplashScreen';

EStyleSheet.build({});

const App = () => {

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
          <SplashScreen>
            <NavigationContainer>
              <Navigator/>
            </NavigationContainer>
          </SplashScreen>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
