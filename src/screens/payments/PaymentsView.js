import React from 'react';
import {
  SafeAreaView,
  View,
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import CustomText from '../../components/CustomText';

const PaymentsView = ({navigation}) => {
  return (
    <SafeAreaView style={styles.screen}>
      <HeaderElement navigation={navigation} title='Payments'/>
      <View style={styles.sectionContainer}>
        <CustomText>Coming soon</CustomText>
      </View>
    </SafeAreaView>
  )
};

const styles = EStyleSheet.create({
  screen: {
    flex: 1
  },
  sectionContainer: {
    paddingVertical: 10,
    paddingHorizontal: 24,
  }
});

export default PaymentsView;
