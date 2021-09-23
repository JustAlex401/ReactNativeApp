import React from 'react';
import {
  SafeAreaView,
  View,
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import CustomText from '../components/CustomText';

const PaymentsScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <View style={styles.sectionContainer}>
        <CustomText>Coming soon</CustomText>
      </View>
    </SafeAreaView>
  )
};

const styles = EStyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  }
});

export default PaymentsScreen;
