import React, { useEffect } from 'react';
import { Text } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export default CustomText = ({children, style}) => {
  return (
    <Text style={[{...style}, styles.text]}>{children}</Text>
  );
};

const styles = EStyleSheet.create({
  text: {
    fontFamily: 'SFUIDisplay-Bold'
  }
});