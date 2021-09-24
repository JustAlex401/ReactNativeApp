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
    <SafeAreaView>
      <HeaderElement navigation={navigation} title='Accounts'/>
      <View style={styles.sectionContainer}>
        <CustomText>Accounts</CustomText>
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

export default AccountScreen;
