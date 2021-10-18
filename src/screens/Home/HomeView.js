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
import GivingCard from '../../components/GivingCard';

const HomeView = ({
  handleOpenDrawer, 
  handleNavigationToScreen, 
  fullDate, 
  username,
  videoPause
}) => {

  const cardList = [
    {
      id: faker.datatype.uuid(),
      message: 'Danny, Your donation helped 5 amazing kids get much needed cancer surgery, thanks forbeing amazing!',
      title: 'Your Giving Impact',
      subtitle: 'St Jude . 4 hrs ago'
    },
    {
      id: faker.datatype.uuid(),
      message: 'Danny, Your donation helped 5 amazing kids get much needed cancer surgery, thanks forbeing amazing!',
      title: 'Your Giving Impact',
      subtitle: 'St Jude . 4 hrs ago'
    },
    {
      id: faker.datatype.uuid(),
      message: 'Danny, Your donation helped 5 amazing kids get much needed cancer surgery, thanks forbeing amazing!',
      title: 'Your Giving Impact',
      subtitle: 'St Jude . 4 hrs ago'
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
          <View>
            <CustomText style={styles.dateText}>{fullDate.dayPart} {username} | {fullDate.month} {fullDate.day}, {fullDate.year}</CustomText>
            <AccountsOverviewCard handleNavigationToScreen={handleNavigationToScreen}/>
          </View>
        }
        data={cardList}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => {
          return (
            <GivingCard
              key={index} 
              item={item} 
              index={index}
              videoPause={videoPause}
            />
          )
        }}
      />
    </SafeAreaView>
  );
};

const styles = EStyleSheet.create({
  iconSize: {
    width: 16,
    height: 16
  }, 
  dateText: {
    color: '#696969',
    fontSize: 14,
    lineHeight: 20,
    paddingTop: 10
  },
  logoIcon: {
    width: 64,
    height: 36
  },
  paddingHorizontal: {
    paddingHorizontal: 10
  }
});

export default HomeView;
