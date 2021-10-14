import React from 'react';
import {
  SafeAreaView,
  View,
  Button,
  TouchableOpacity,
  Image
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import CustomText from '../../components/CustomText';
import Header from '../../components/Header';
import UserProfile from '../../components/UserProfile';
import globalStyles from '../../../assets/styles';

const HomeView = ({handleOpenDrawer, handleNavigationToScreen, fullDate}) => {
  return (
    <SafeAreaView style={globalStyles.flex}>
      <Header 
        left={
          <TouchableOpacity onPress={handleOpenDrawer}>
            <Image source={require('../../../assets/icons/burgerMenuIcon.png')} style={styles.iconSize}/>
          </TouchableOpacity>
        }
        center={
          <Image source={require('../../../assets/icons/logo.png')}/>
        } 
        right={
          <UserProfile/>
        }
      />
      <View style={[globalStyles.sectionContainer, globalStyles.flex]}>
        <CustomText style={styles.dateText}>{fullDate.dayPart} Danny | {fullDate.month} {fullDate.day}, {fullDate.year}</CustomText>
        {/* <Button title="Go to savings" onPress={() => handleNavigationToScreen('SavingsScreen', {subtitle: 'SavingsScreen'})}/>
        <Button title="Go to checking" onPress={() => handleNavigationToScreen('CheckingScreen', {subtitle: 'CheckingScreen'})}/> */}
      </View>
    </SafeAreaView>
  );
};

const styles = EStyleSheet.create({
  iconSize: {
    width: 15,
    height: 15
  }, 
  dateText: {
    color: globalStyles.defaultColor,
    fontSize: 14
  }
});

export default HomeView;
