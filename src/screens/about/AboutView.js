import React from 'react';
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  Image
} from 'react-native';

import EStyleSheet from 'react-native-extended-stylesheet';
import CustomText from '../../components/CustomText';
import Header from '../../components/header';
import globalStyles from '../../../assets/styles';

const AboutView = ({navigation}) => {
  return (
    <SafeAreaView style={globalStyles.flex}>
      <Header 
        left={
          <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
            <Image source={require('../../../assets/icons/back.png')} style={globalStyles.iconSize}/>
          </TouchableOpacity>
        }
        title='Accounts' 
        right={
          <UserProfile/>
        }
      />
      <View style={globalStyles.sectionContainer}>
        <CustomText>About</CustomText>
      </View>
    </SafeAreaView>
  );
};

const styles = EStyleSheet.create({
  
});

export default AboutView;
