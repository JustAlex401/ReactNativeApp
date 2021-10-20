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
import UserProfile from '../../components/UserProfile';
import globalStyles from '../../../assets/styles';

const SavingsView = ({subtitle, handleNavigationGoBack, handleNavigationToScreen}) => {
  return (
    <SafeAreaView style={globalStyles.flex}>
      <Header 
        left={
          <TouchableOpacity onPress={handleNavigationGoBack} style={styles.touchableOpacity}>
            <Image source={require('../../../assets/icons/back.png')} style={styles.iconSize}/>
          </TouchableOpacity>
        }
        center={
          <View style={styles.centerHeader}>
            <CustomText style={styles.title}>Savings</CustomText>
            <CustomText style={styles.subtitle}>{subtitle}</CustomText>
          </View>
        }
        right={
          <UserProfile handleNavigationToScreen={handleNavigationToScreen}/>
        }
      />
      <View style={globalStyles.sectionContainer}>
        <CustomText>Savings</CustomText>
      </View>
    </SafeAreaView>
  )
};

const styles = EStyleSheet.create({
  iconSize: {
    width: 20,
    height: 20,
    resizeMode: 'contain'
  },
  touchableOpacity: {
    left: -4
  },
  title: {
    color: 'white', 
    fontSize: 16,
    lineHeight: 22
  },
  subtitle : {
    color: 'white', 
    fontSize: 12,
    lineHeight: 18,
  },
  centerHeader: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default SavingsView;
