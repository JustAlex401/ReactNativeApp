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

EStyleSheet.build({});

const App = () => {

  return (
    <Navigator/>
  );
};

export default App;
