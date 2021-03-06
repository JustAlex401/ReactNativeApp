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

const PaymentsView = ({handleOpenDrawer, handleNavigationToScreen}) => {
  return (
    <SafeAreaView style={globalStyles.flex}>
      <Header 
        left={
          <TouchableOpacity onPress={handleOpenDrawer}>
            <Image source={require('../../../assets/icons/burgerMenuIcon.png')} style={globalStyles.iconSize}/>
          </TouchableOpacity>
        }
        title='Payments' 
        right={
          <UserProfile handleNavigationToScreen={handleNavigationToScreen}/>
        }
      />
      <View style={globalStyles.sectionContainer}>
        <CustomText>Coming soon</CustomText>
      </View>
    </SafeAreaView>
  )
};

const styles = EStyleSheet.create({
  
});

export default PaymentsView;
