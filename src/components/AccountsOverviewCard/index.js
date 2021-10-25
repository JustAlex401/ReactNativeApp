import React from 'react';
import { View } from 'react-native';
import faker from 'faker';
import EStyleSheet from 'react-native-extended-stylesheet';
import globalStyles from '../../../assets/styles';
import CustomText from '../CustomText';
import CardAction from './CardAction';

export default AccountsOverviewCard = ({handleNavigationToScreen}) => {
  const cardActions = [
    {
      id: faker.datatype.uuid(),
      title:'Checking',
      subtitle:'Main account (...0353)',
      amount:'1,500',
      fractionalPartOfTheAmount:'20',
      navigationScreenName:'CheckingScreen',
      routerParam:{subtitle: 'Main account (...0353)'},
      isBottomDividerNeed: true
    },
    {
      id: faker.datatype.uuid(),
      title:'Savings',
      subtitle:'Buy a house (...4044)',
      amount:'5,000',
      fractionalPartOfTheAmount:'20',
      navigationScreenName:'SavingsScreen',
      routerParam:{subtitle: 'Buy a house (...4044)'},
      isBottomDividerNeed: true
    },
    {
      id: faker.datatype.uuid(),
      title:'Goodness',
      subtitle:'Cash Rewards',
      amount:'500',
      fractionalPartOfTheAmount:'40',
      navigationScreenName:'Giving',
    }
  ];

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
        {
          cardActions.map((item, index) => (
            <CardAction 
              item={item} 
              key={index} 
              index={index} 
              handleNavigationToScreen={handleNavigationToScreen}
            />
          ))
        }
      </View>
    </View>
  );
};

const styles = EStyleSheet.create({
  rootContainer: {
    flex: 1,
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: globalStyles.defaultColor,
    backgroundColor: 'white',
    marginTop: 14,
    height: 350,
  },
  titleContainer: {
    flex: 0, 
    justifyContent: 'center', 
    alignItems: 'center', 
    paddingVertical: 10
  },
  cardsContainer: {
    flex: 1, 
    flexDirection: 'column',
    justifyContent: 'center', 
  },
  title: {
    fontSize: 20,
    lineHeight: 26,
    marginBottom: 10,
    marginTop: 10
  },
  generalAmount: {
    fontSize: 26,
    lineHeight: 32,
  },
  fractionalPartOfTheAmount: {
    fontSize: 18
  },
  subtitle: {
    fontSize: 12,
    lineHeight: 18,
    color: globalStyles.defaultColor
  }
});