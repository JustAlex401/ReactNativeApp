import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Button
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const HomeScreen = ({navigation}) => {

  const loadScene = () => {
    navigation.navigate('About');
  }

  return (
    <SafeAreaView>
      <View style={styles.sectionContainer}>
        <Text style={styles.textStyle}>Home</Text>
        <Button title="Go to about" onPress={loadScene}/>
      </View>
    </SafeAreaView>
  )
};

const styles = EStyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  textStyle: {
    fontFamily: 'SFUIDisplay-Bold'
  }
});

export default HomeScreen;
