
import { DrawerContentScrollView } from '@react-navigation/drawer';
import React from 'react';
import { TouchableOpacity, SafeAreaView } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import globalStyles from '../../../assets/styles';
import CustomText from '../CustomText';

export default DrawerMenu = (props) => {

  return (
    <SafeAreaView style={[globalStyles.flex, globalStyles.sectionContainer]}>
      <DrawerContentScrollView style={styles.drawerScroll}>
        <TouchableOpacity style={styles.touchableOpacity} onPress={() => props.navigation.navigate('Home')}>
          <CustomText style={styles.text}>Home</CustomText>
        </TouchableOpacity>
      </DrawerContentScrollView>
    </SafeAreaView>
  );
};

const styles = EStyleSheet.create({
  touchableOpacity: {
    marginTop: 20,
    borderWidth: 2,
    height: 30,
    borderRadius: 20,
    justifyContent: 'center',
    borderColor: globalStyles.themeColor
  },
  drawerScroll: {
    marginLeft: 5
  }, 
  text: {
    textAlign: 'center',
  }
});