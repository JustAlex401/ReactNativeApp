import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Button
} from 'react-native';

import EStyleSheet from 'react-native-extended-stylesheet';

const Account = ({navigation}) => {

  return (
    <SafeAreaView>
      <View style={styles.sectionContainer}>
        <Text>Account</Text>
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

export default Account;
