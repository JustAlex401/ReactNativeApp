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

const HomeView = ({handleOpenDrawer, handleNavigationToScreen}) => {
  return (
    <SafeAreaView style={globalStyles.flex}>
      <Header 
        left={
          <TouchableOpacity onPress={handleOpenDrawer}>
            <Image source={require('../../../assets/icons/burgerMenuIcon.png')} style={styles.iconSize}/>
          </TouchableOpacity>
        }
        title='Home' 
        right={
          <UserProfile/>
        }
      />
      <View style={globalStyles.sectionContainer}>
        <CustomText>Home</CustomText>
        <Button title="Go to about" onPress={() => handleNavigationToScreen('AboutScreen')}/>
        <Button title="Go to savings" onPress={() => handleNavigationToScreen('SavingsScreen', {subtitle: 'SavingsScreen'})}/>
        <Button title="Go to checking" onPress={() => handleNavigationToScreen('CheckingScreen', {subtitle: 'CheckingScreen'})}/>
      </View>
    </SafeAreaView>
  );
};

const styles = EStyleSheet.create({
  iconSize: {
    width: 15,
    height: 15
  }
});

export default HomeView;
