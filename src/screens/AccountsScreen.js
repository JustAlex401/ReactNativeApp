import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
} from 'react-native';

import EStyleSheet from 'react-native-extended-stylesheet';

const AccountScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <View style={styles.sectionContainer}>
        <Text>Accounts</Text>
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
