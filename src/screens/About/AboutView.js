import React from 'react';
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  Image
} from 'react-native';

import EStyleSheet from 'react-native-extended-stylesheet';
import CustomText from '../../Components/CustomText';
import Header from '../../Components/Header';
import globalStyles from '../../../assets/styles';

const AboutView = ({handleNavigationToScreen}) => {
  return (
    <SafeAreaView style={globalStyles.flex}>
      <Header 
        left={
          <TouchableOpacity onPress={() => handleNavigationToScreen('HomeScreen')} style={styles.touchableOpacity}>
            <Image source={require('../../../assets/icons/back.png')} style={styles.iconSize}/>
          </TouchableOpacity>
        }
        title='About' 
        right={
          <UserProfile/>
        }
      />
      <View style={globalStyles.sectionContainer}>
        <CustomText>About</CustomText>
      </View>
    </SafeAreaView>
  );
};

const styles = EStyleSheet.create({
  iconSize: {
    width: 20,
    height: 20,
    resizeMode: 'contain'
  },
  touchableOpacity: {
    left: -4
  }
});

export default AboutView;
