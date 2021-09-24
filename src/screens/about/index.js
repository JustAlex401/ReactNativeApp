import React from 'react';
import {
  SafeAreaView,
  View,
} from 'react-native';

import EStyleSheet from 'react-native-extended-stylesheet';
import CustomText from '../../components/CustomText';
import HeaderElement from '../../components/header';

const AboutScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <HeaderElement navigation={navigation} title='About'/>
      <View style={styles.sectionContainer}>
        <CustomText>About</CustomText>
      </View>
    </SafeAreaView>
  );
};

const styles = EStyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default AboutScreen;