import React from 'react';
import { View, SafeAreaView } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import globalStyles from '../../../assets/styles';
import CustomText from '../CustomText';

export default Header = ({
  left, center, right, title, children
}) => {

  return (
    <SafeAreaView edges={['top']} style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.leftSide}>{left}</View>
        <View style={styles.center}>
          {center ? center :
            <CustomText style={styles.text}>{title}</CustomText>
          }
        </View>
        <View style={styles.rightSide}>{right}</View>
      </View>
      {children}
    </SafeAreaView>
  );
};

const styles = EStyleSheet.create({
  safeArea: {
    backgroundColor: globalStyles.themeColor
  },
  container: {
    flex: 0,
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  leftSide: {
    flex: 1,
    height: '100%',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: 10
  },
  center: {
    flex: 2,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightSide: {
    flex: 1,
    height: '100%',
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingRight: 10
  },
  text: {
    color: 'white',
    fontSize: 18
  }
});
