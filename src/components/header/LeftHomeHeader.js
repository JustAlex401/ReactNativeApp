import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export default LeftHomeHeader = ({navigation}) => {

  return (
    <View style={styles.root}>
      <TouchableOpacity onPress={() => console.log("Drawer")}>
        <Image source={require('../../../assets/icons/burgerMenuIcon.png')} style={styles.iconSize}/>
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
    width: 15,
    height: 15,
    resizeMode: 'contain'
  }
});
