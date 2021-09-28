import React, { useEffect } from 'react';
import { SafeAreaView, Image, TouchableOpacity, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export default LeftHeader = ({navigation}) => {

  return (
    <View style={styles.root}>
      <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
        <Image source={require('../../../assets/icons/back.png')} style={styles.iconSize}/>
      </TouchableOpacity>
    </View>
  );
};

const styles = EStyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconSize: {
    width: 20,
    height: 20,
    resizeMode: 'contain'
  }
});
