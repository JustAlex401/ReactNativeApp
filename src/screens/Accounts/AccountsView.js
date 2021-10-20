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
          <UserProfile handleNavigationToScreen={handleNavigationToScreen}/>
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
