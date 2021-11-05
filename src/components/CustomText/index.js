import React from 'react';
import { Text } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export default CustomText = ({children, style}) => {

  const getArrayOfStyles = () => {
    style.push(styles.text);
    return style;
  };

  return (
    <Text style={Array.isArray(style) ? getArrayOfStyles() : [{...style}, styles.text]}>{children}</Text>
  );
};

const styles = EStyleSheet.create({
  text: {
  }
});