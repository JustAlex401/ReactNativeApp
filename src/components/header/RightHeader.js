import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export default RightHeader = ({navigation}) => {

  return (
    <View>
      <TouchableOpacity onPress={() => console.log("logic")}>
        <Image source={require('../../../assets/icons/oval.png')} style={styles.iconSize}/>
      </TouchableOpacity>
    </View>
  );
};

const styles = EStyleSheet.create({
  iconSize: {
    width: 25,
    height: 25,
    resizeMode: 'contain'
  }
});
