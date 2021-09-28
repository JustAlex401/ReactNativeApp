import React from 'react';
import { View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import CustomText from '../CustomText';

export default HeaderTitle = ({navigation, title}) => {

  return (
    <View>
      <CustomText style={styles.text}>{title}</CustomText>
    </View>
  );
};

const styles = EStyleSheet.create({
  text: {
    fontSize: 18,
    color: 'white'
  }
});
