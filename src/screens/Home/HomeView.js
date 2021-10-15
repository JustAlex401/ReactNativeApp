import React from 'react';
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  Image,
  ScrollView
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import CustomText from '../../components/CustomText';
import Header from '../../components/Header';
import UserProfile from '../../components/UserProfile';
import globalStyles from '../../../assets/styles';
import AccountsOverviewCard from '../../components/AccountsOverviewCard';

const HomeView = ({handleOpenDrawer, handleNavigationToScreen, fullDate, username}) => {
  return (
    <SafeAreaView style={globalStyles.flex}>
      <Header 
        left={
          <TouchableOpacity onPress={handleOpenDrawer}>
            <Image source={require('../../../assets/icons/burgerMenuIcon.png')} style={styles.iconSize}/>
          </TouchableOpacity>
        }
        center={
          <Image style={styles.logoIcon} source={require('../../../assets/icons/logo.png')}/>
        } 
        right={
          <UserProfile/>
        }
      />
      <SafeAreaView style={globalStyles.flex}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.paddingVertical}>
            <CustomText style={styles.dateText}>{fullDate.dayPart} {username} | {fullDate.month} {fullDate.day}, {fullDate.year}</CustomText>
            <AccountsOverviewCard handleNavigationToScreen={handleNavigationToScreen}/>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaView>
  );
};

const styles = EStyleSheet.create({
  iconSize: {
    width: 15,
    height: 15
  }, 
  dateText: {
    color: '#696969',
    fontSize: 14
  },
  logoIcon: {
    width: 65,
    height: 35
  },
  scrollView: {
    paddingHorizontal: 10
  },
  paddingVertical: {
    paddingVertical: 10
  }
});

export default HomeView;
