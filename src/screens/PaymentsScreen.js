import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const PaymentsScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <View style={styles.sectionContainer}>
        <Text style={styles.textStyle}>Coming soon</Text>
      </View>
    </SafeAreaView>
  )
};

const styles = EStyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  textStyle: {
    fontFamily: 'SFUIDisplay-Bold'
  }
});

export default PaymentsScreen;
