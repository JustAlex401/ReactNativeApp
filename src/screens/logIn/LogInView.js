import React from 'react';
import {
  SafeAreaView,
  View,
  Button,
  TouchableOpacity,
  Image
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import CustomText from '../../components/CustomText';
import globalStyles from '../../../assets/styles';

const LogInView = (props) => {
  return (
    <SafeAreaView style={globalStyles.flex}>
      <View style={styles.titleView}>
        <CustomText style={styles.title}>Login</CustomText>
      </View>
    </SafeAreaView>
  )
};

const styles = EStyleSheet.create({
  title: {
    fontWeight: 'bold'
  },
  titleView: {
    
  }
});

export default LogInView;
