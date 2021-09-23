import React from 'react';

import EStyleSheet from 'react-native-extended-stylesheet';
import Navigator from './src/navigation/Navigator';
import { ThemeProvider } from 'react-native-elements';

EStyleSheet.build({
  $iconColor: "#FF00FF",
  $defaultColor: "#8e8e93"
});

const App = () => {
  return (
    <ThemeProvider>
      <Navigator/>
    </ThemeProvider>
  );
};

export default App;
