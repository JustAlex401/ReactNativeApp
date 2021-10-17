import React from 'react';
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  Image,
  FlatList
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import CustomText from '../../components/CustomText';
import Header from '../../components/Header';
import UserProfile from '../../components/UserProfile';
import globalStyles from '../../../assets/styles';
import AccountsOverviewCard from '../../components/AccountsOverviewCard';
import faker from 'faker';

const HomeView = ({handleOpenDrawer, handleNavigationToScreen, fullDate, username}) => {

  const cardList = [
    {
      id: faker.datatype.uuid()
    }
  ];

  return (
    <SafeAreaView style={globalStyles.flex}>
      <Header 
        left={
          <TouchableOpacity onPress={handleOpenDrawer}>
            <Image source={require('../../../assets/icons/burgerMenuIcon.png')} style={styles.iconSize}/>
          </TouchableOpacity>
        }
        center={
          <Image style={styles.logoIcon} source={require('../../../assets/icons/logo.png')}/>
        }
        right={
          <UserProfile/>
        }
      />
      <FlatList
        style={styles.paddingHorizontal}
        ListHeaderComponent={
          <>
            <CustomText style={styles.dateText}>{fullDate.dayPart} {username} | {fullDate.month} {fullDate.day}, {fullDate.year}</CustomText>
            <AccountsOverviewCard handleNavigationToScreen={handleNavigationToScreen}/>
          </>
        }
        data={cardList}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => {
          return (
            <></>
          )
        }}
      />
    </SafeAreaView>
  );
};

const styles = EStyleSheet.create({
  iconSize: {
    width: 15,
    height: 15
  }, 
  dateText: {
    color: '#696969',
    fontSize: 14,
    paddingTop: 10
  },
  logoIcon: {
    width: 65,
    height: 35
  },
  paddingHorizontal: {
    paddingHorizontal: 10
  }
});

export default HomeView;
