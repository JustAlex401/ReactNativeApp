import React from 'react';
import {
  SafeAreaView,
  View,
} from 'react-native';

import EStyleSheet from 'react-native-extended-stylesheet';
import CustomText from '../../components/CustomText';
import HeaderElement from '../../components/header';

const AccountScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.screen}>
      <HeaderElement navigation={navigation} title='Accounts'/>
      <View style={styles.sectionContainer}>
        <CustomText>Accounts</CustomText>
      </View>
    </SafeAreaView>
  );
};

const styles = EStyleSheet.create({
  screen: {
    flex: 1
  },
  sectionContainer: {
    paddingVertical: 10,
    paddingHorizontal: 24,
  },
});

export default AccountScreen;
