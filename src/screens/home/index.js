import React from 'react';
import {
  SafeAreaView,
  View,
  Button
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import CustomText from '../../components/CustomText';
import HeaderElement from '../../components/header';

const HomeScreen = ({route, navigation}) => {

  const handlePressBtn = () => {
    navigation.navigate('AboutScreen');
  }

  return (
    <SafeAreaView style={styles.screen}>
      <HeaderElement route={route.name} navigation={navigation} title='Home'/>
      <View style={styles.sectionContainer}>
        <CustomText>Home</CustomText>
        <Button title="Go to about" onPress={handlePressBtn}/>
      </View>
    </SafeAreaView>
  )
};

const styles = EStyleSheet.create({
  screen: {
    flex: 1
  },
  sectionContainer: {
    paddingVertical: 10,
    paddingHorizontal: 24,
  }
});

export default HomeScreen;
