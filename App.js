import React from 'react';
import {
  SafeAreaView,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import EStyleSheet from 'react-native-extended-stylesheet';
import Navigator from './src/navigator/Navigator';
import { ThemeProvider } from 'react-native-elements';

EStyleSheet.build({});

const App = () => {

  return (
    <ThemeProvider>
      <Navigator/>
    </ThemeProvider>
  );
};

export default App;
