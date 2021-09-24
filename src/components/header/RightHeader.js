import React, { useEffect } from 'react';
import { SafeAreaView, Image, TouchableOpacity } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export default RightHeader = ({navigation}) => {

  return (
    <SafeAreaView>
      <TouchableOpacity onPress={() => console.log("logic")}>
        <Image source={require('../../../assets/icons/oval.png')} style={styles.iconSize}/>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = EStyleSheet.create({
  iconSize: {
    width: 25,
    height: 25,
    resizeMode: 'contain'
  }
});
