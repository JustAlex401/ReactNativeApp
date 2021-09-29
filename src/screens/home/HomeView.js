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
import Header from '../../components/header';
import UserProfile from '../../components/UserProfile';
import globalStyles from '../../../assets/styles';

const HomeView = ({route, navigation, handlePressBtn}) => {
  return (
    <SafeAreaView style={globalStyles.flex}>
      <Header 
        left={
          <TouchableOpacity onPress={() => console.log("Drawer")}>
            <Image source={require('../../../assets/icons/burgerMenuIcon.png')} style={globalStyles.iconSize}/>
          </TouchableOpacity>
        }
        title='Home' 
        right={
          <UserProfile/>
        }
      />
      <View style={globalStyles.sectionContainer}>
        <CustomText>Home</CustomText>
        <Button title="Go to about" onPress={handlePressBtn}/>
      </View>
    </SafeAreaView>
  )
};

const styles = EStyleSheet.create({
  
});

export default HomeView;
