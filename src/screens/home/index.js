import React from 'react';
import {
  SafeAreaView,
  View,
  Button
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import CustomText from '../../components/CustomText';

const HomeScreen = ({navigation}) => {

  const handlePressBtn = () => {
    navigation.navigate('About');
  }

  return (
    <SafeAreaView>
      <View style={styles.sectionContainer}>
        <CustomText>Home</CustomText>
        <Button title="Go to about" onPress={handlePressBtn}/>
      </View>
    </SafeAreaView>
  )
};

const styles = EStyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  }
});

export default HomeScreen;
