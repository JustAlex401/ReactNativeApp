import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';
import EStyleSheet from 'react-native-extended-stylesheet';
import globalStyles from '../../../assets/styles';
import CustomText from '../CustomText';

export default CardAction = ({
  title, 
  subtitle, 
  amount, 
  fractionalPartOfTheAmount, 
  handleNavigationToScreen, 
  navigationScreenName, 
  routerParam,
  isHeartNeed,
  isTheLastCard
}) => {
  return (
    <View style={isTheLastCard ? styles.rootContainer : [styles.borderCard, styles.rootContainer]}>
      <TouchableOpacity 
        style={styles.opacityView} 
        onPress={() => handleNavigationToScreen(navigationScreenName, routerParam)}
      >
        <View style={styles.leftContent}>
          <CustomText style={styles.title}>{title} {isHeartNeed && 
            <Image source={require('../../../assets/icons/heart.png')}/>
          }</CustomText>
          <CustomText style={styles.subtitle}>{subtitle}</CustomText>
        </View>
        <View style={styles.rightContent}>
          <CustomText style={styles.amount}>
            ${amount}.
            <CustomText 
              style={styles.fractionalPartOfTheAmount}
            >
              {fractionalPartOfTheAmount}
            </CustomText>
          </CustomText>
          <Icon color={globalStyles.themeColor} type='entypo' name='chevron-right'/>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = EStyleSheet.create({
  rootContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  borderCard: {
    borderBottomWidth: 0.5,
    borderBottomColor: globalStyles.defaultColor
  },
  opacityView: {
    flex: 1, 
    flexDirection: 'row'
  },
  leftContent: {
    flex: 1.8, 
    flexDirection: 'column', 
    alignItems: 'flex-start', 
    justifyContent: 'center', 
    paddingLeft: 20
  },
  rightContent: {
    flex: 1.2, 
    flexDirection: 'row', 
    justifyContent: 'flex-end', 
    alignItems: 'center', 
    paddingRight: 20,
  },
  title: {
    fontSize: 15
  },
  subtitle: {
    fontSize: 14,
    color: globalStyles.defaultColor
  },
  amount: {
    fontSize: 20,
    paddingRight: 7
  },
  fractionalPartOfTheAmount: {
    fontSize: 15
  }
});