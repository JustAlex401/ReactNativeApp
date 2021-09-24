import React from 'react';

import EStyleSheet from 'react-native-extended-stylesheet';
import Navigator from './src/navigation/Navigator';
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
