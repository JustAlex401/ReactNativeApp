import React, { useEffect } from 'react';
import { SafeAreaView, Image, TouchableOpacity } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import CustomText from '../CustomText';

export default HeaderTitle = ({navigation, title}) => {

  return (
    <SafeAreaView>
      <CustomText style={styles.text}>{title}</CustomText>
    </SafeAreaView>
  );
};

const styles = EStyleSheet.create({
  text: {
    fontSize: 18,
    color: 'white'
  }
});
