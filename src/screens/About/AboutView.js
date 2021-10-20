import React from 'react';
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  Image
} from 'react-native';

import EStyleSheet from 'react-native-extended-stylesheet';
import CustomText from '../../components/CustomText';
import Header from '../../components/Header';
import globalStyles from '../../../assets/styles';
import UserProfile from '../../components/UserProfile';

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
          <UserProfile handleNavigationToScreen={handleNavigationToScreen}/>
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
