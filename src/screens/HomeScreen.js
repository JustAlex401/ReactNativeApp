import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
} from 'react-native';

import Home from '../components/Home';

const HomeScreen = ({navigation}) => {

  return (
    <Home navigation={navigation}/>
  );
};

export default HomeScreen;
