import React from 'react';
import { View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import globalStyles from '../../../assets/styles';
import CustomText from '../CustomText';
import CardAction from './CardAction';

export default AccountsOverviewCard = ({handleNavigationToScreen}) => {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.titleContainer}>
        <CustomText style={styles.title}>Accounts Overview</CustomText>
        <CustomText style={styles.generalAmount}>
          $7,000.
          <CustomText style={styles.fractionalPartOfTheAmount}>
            80
          </CustomText>
        </CustomText>
        <CustomText style={styles.subtitle}>Total Available cash</CustomText>
      </View>
      <View style={styles.cardsContainer}>
        <CardAction 
          title='Checking' 
          subtitle='Main account (...0353)'
          amount='1,500'
          fractionalPartOfTheAmount='20'
          handleNavigationToScreen={handleNavigationToScreen}
          navigationScreenName='CheckingScreen'
          routerParam={{subtitle: 'CheckingScreen'}}
        />
        <CardAction 
          title='Savings' 
          subtitle='Buy a house (...4044)'
          amount='5,000'
          fractionalPartOfTheAmount='20'
          handleNavigationToScreen={handleNavigationToScreen}
          navigationScreenName='SavingsScreen'
          routerParam={{subtitle: 'SavingsScreen'}}
        />
        <CardAction 
          title='Goodness' 
          subtitle='Cash Rewards'
          amount='500'
          fractionalPartOfTheAmount='40'
          handleNavigationToScreen={handleNavigationToScreen}
          navigationScreenName='Giving'
          isHeartNeed={true}
          isTheLastCard={true}
        />
      </View>
    </View>
  );
};

const styles = EStyleSheet.create({
  rootContainer: {
    flex: 1,
    borderRadius: 7,
    borderWidth: 0.5,
    borderColor: globalStyles.defaultColor,
    backgroundColor: 'white',
    marginTop: 15,
    height: 330,
  },
  titleContainer: {
    flex: 0, 
    justifyContent: 'center', 
    alignItems: 'center', 
    paddingVertical: 10
  },
  cardsContainer: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  title: {
    fontSize: 19,
    marginBottom: 10,
    marginTop: 10
  },
  generalAmount: {
    fontSize: 27
  },
  fractionalPartOfTheAmount: {
    fontSize: 19
  },
  subtitle: {
    fontSize: 12,
    color: globalStyles.defaultColor
  }
});