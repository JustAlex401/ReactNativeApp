import React from 'react';
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  Image
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Icon } from 'react-native-elements';
import faker from 'faker';
import CustomText from '../../components/CustomText';
import Header from '../../components/Header';
import UserProfile from '../../components/UserProfile';
import globalStyles from '../../../assets/styles';
import CardAction from '../../components/AccountsOverviewCard/CardAction';

const AccountView = ({handleNavigationToScreen, handleOpenDrawer}) => {

  const cardActions = [
    {
      id: faker.datatype.uuid(),
      title:'Checking',
      subtitle:'Main account (...0353)',
      amount:'1,500',
      fractionalPartOfTheAmount:'20',
      navigationScreenName:'CheckingScreen',
      routerParam:{subtitle: 'Main account (...0353)'}
    },
    {
      id: faker.datatype.uuid(),
      title:'Savings',
      subtitle:'Buy a house (...4044)',
      amount:'5,000',
      fractionalPartOfTheAmount:'20',
      navigationScreenName:'SavingsScreen',
      routerParam:{subtitle: 'Buy a house (...4044)'},
      footer: (
        <View style={styles.cardFooter}>
          <Icon name='triangle-up' type='entypo' color='#32CD32'/>
          <CustomText style={styles.cardFooterText}>Savings is up 3% from last mont</CustomText>
        </View> 
      )
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
    <SafeAreaView style={globalStyles.flex}>
      <Header 
        left={
          <TouchableOpacity onPress={handleOpenDrawer}>
            <Image source={require('../../../assets/icons/burgerMenuIcon.png')} style={globalStyles.iconSize}/>
          </TouchableOpacity>
        }
        title='Accounts' 
        right={
          <UserProfile handleNavigationToScreen={handleNavigationToScreen}/>
        }
      />
      <View style={[globalStyles.sectionContainer, globalStyles.flex]}>
        <View style={styles.titleContainer}>
          <CustomText style={styles.generalAmount}>
            $7,000.
            <CustomText style={styles.fractionalPartOfTheAmount}>
              80
            </CustomText>
          </CustomText>
          <CustomText style={styles.subtitle}>Total available cash</CustomText>
        </View>
        <View style={styles.iconsContainer}>
          <View style={styles.iconView}>
            <Image source={require('../../../assets/icons/circleButtonSend.png')}/>
            <CustomText>Send</CustomText> 
          </View>
          <View style={styles.iconView}>
            <Image source={require('../../../assets/icons/circleButtonPay.png')}/>
            <CustomText>Pay</CustomText> 
          </View>          
          <View style={styles.iconView}>
            <Image source={require('../../../assets/icons/circleButtonChecking.png')}/>
            <CustomText>Transfer</CustomText> 
          </View>
        </View>
        <View style={styles.cardsContainer}>
          {
            cardActions.map((item, index) => (
              <View key={index} style={styles.cardContainer}>
                <CardAction 
                  item={item} 
                  index={index} 
                  handleNavigationToScreen={handleNavigationToScreen}
                />
              </View>
            ))
          }
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = EStyleSheet.create({
  titleContainer: {
    flex: 0, 
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 30,
    height: 70
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
  },
  iconsContainer: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginTop: 20,
    marginHorizontal: 50
  },
  iconView: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  cardsContainer: {
    flex: 1, 
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  cardContainer: {
    backgroundColor: 'white',
    marginTop: 10
  },
  cardFooter: {
    flex: 0, 
    flexDirection: 'row',
    justifyContent: 'center', 
    alignItems: 'center'
  },
  cardFooterText: {
    color: '#32CD32'
  }
});

export default AccountView;
