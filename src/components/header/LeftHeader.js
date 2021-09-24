import React, { useEffect } from 'react';
import { SafeAreaView, Image, TouchableOpacity } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export default LeftHeader = ({navigation}) => {

  return (
    <SafeAreaView>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Image source={require('../../../assets/icons/back.png')} style={styles.iconSize}/>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = EStyleSheet.create({
  iconSize: {
    width: 20,
    height: 20,
    resizeMode: 'contain'
  }
});
