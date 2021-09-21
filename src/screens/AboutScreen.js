import React from 'react';
import {
  SafeAreaView,
  View,
} from 'react-native';

import About from '../components/About';

const AboutScreen = ({navigation}) => {

  return (
    <About navigation={navigation}/>
  );
};

export default AboutScreen;
