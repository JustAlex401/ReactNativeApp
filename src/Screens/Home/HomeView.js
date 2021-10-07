import React from 'react';
import {
  SafeAreaView,
  View,
  Button,
  TouchableOpacity,
  Image
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import CustomText from '../../Components/CustomText';
import Header from '../../Components/Header';
import UserProfile from '../../Components/UserProfile';
import globalStyles from '../../../assets/styles';

const HomeView = ({route, navigation, handlePressBtn}) => {
  return (
    <SafeAreaView style={globalStyles.flex}>
      <Header 
        left={
          <TouchableOpacity onPress={navigation.openDrawer}>
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
        <Button title="Go to about" onPress={() => handlePressBtn('AboutScreen')}/>
        <Button title="Go to savings" onPress={() => handlePressBtn('SavingsScreen')}/>
        <Button title="Go to checking" onPress={() => handlePressBtn('CheckingScreen')}/>
      </View>
    </SafeAreaView>
  )
};

const styles = EStyleSheet.create({
  iconSize: {
    width: 15,
    height: 15
  }
});

export default HomeView;
