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
import UserProfile from '../../Components/UserProfile';
import globalStyles from '../../../assets/styles';
import { Button } from 'react-native-elements';

const AccountView = ({handleNavigationToScreen, handleOpenDrawer}) => {
  return (
    <SafeAreaView style={globalStyles.flex}>
      <Header 
        left={
          <TouchableOpacity onPress={handleOpenDrawer}>
            <Image source={require('../../../assets/icons/burgerMenuIcon.png')} style={globalStyles.iconSize}/>
          </TouchableOpacity>
        }
        title='Accounts' 
        right={
          <UserProfile/>
        }
      />
      <View style={globalStyles.sectionContainer}>
        <CustomText>Accounts</CustomText>
        <Button title="Go to savings" onPress={() => handleNavigationToScreen('SavingsScreen', {subtitle: 'SavingsScreen'})}/>
        <Button title="Go to checking" onPress={() => handleNavigationToScreen('CheckingScreen', {subtitle: 'CheckingScreen'})}/>
      </View>
    </SafeAreaView>
  );
};

const styles = EStyleSheet.create({
  
});

export default AccountView;