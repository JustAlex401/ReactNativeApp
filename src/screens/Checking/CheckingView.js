import React from 'react';
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  TextInput,
  FlatList
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import CustomText from '../../components/CustomText';
import Header from '../../components/Header';
import UserProfile from '../../components/UserProfile';
import globalStyles from '../../../assets/styles';
import { Button } from 'react-native-elements';
import faker from 'faker';
import CardAction from '../../components/AccountsOverviewCard/CardAction';

const CURRENT_WIDTH = Dimensions.get('window').width;

const CheckingView = ({
  subtitle, 
  handleNavigationGoBack, 
  handleNavigationToScreen,
  filterData,
  setFilterData,
  handleFilterData
}) => {

  const checkingList = [
    {
      id: faker.datatype.uuid(),
      title: 'Jul 11',
      cards: [
        {
          id: faker.datatype.uuid(),
          title:'Target',
          subtitle:'Closter NJ | Debit card',
          amount:'63',
          fractionalPartOfTheAmount:'95',
          isBottomDividerNeed: true,
          isChevronNeed: false,
          isDisabled:true
        },
        {
          id: faker.datatype.uuid(),
          title:'Aplpay 7-Eleven',
          subtitle:'Cresskill NJ | iPhone',
          amount:'17',
          fractionalPartOfTheAmount:'75',
          isBottomDividerNeed: true,
          isChevronNeed: false,
          isDisabled:true
        },
        {
          id: faker.datatype.uuid(),
          generalIcon: (
            <Image style={styles.generalIcon} source={require('../../../assets/icons/confetti2.png')}/>
          ),
          title:'Facebook inc',
          subtitle:'Pay day! Yay!',
          titleColorNeed: true,
          subTitleColorNeed: true,
          amountColorNeed: true,
          amount:'1,200',
          fractionalPartOfTheAmount:'50',
          isBottomDividerNeed: true,
          isChevronNeed: false,
          isDisabled:true
        },
        {
          id: faker.datatype.uuid(),
          title:'Lencrafters',
          subtitle:'Paramus NJ | Debit card',
          amount:'320',
          fractionalPartOfTheAmount:'73',
          isBottomDividerNeed: false,
          isChevronNeed: false,
          isDisabled:true
        }
      ]
    },
    {
      id: faker.datatype.uuid(),
      title: 'Jul 10',
      cards: [
        {
          id: faker.datatype.uuid(),
          title:'Transfer from savings',
          subtitle:'Buy a house (...4044)',
          amount:'10,000',
          fractionalPartOfTheAmount:'00',
          isBottomDividerNeed: true,
          isChevronNeed: false,
          isDisabled:true,
          titleColorNeed: true,
          amountColorNeed: true
        },
        {
          id: faker.datatype.uuid(),
          title:'Starbucks',
          subtitle:'Closter NJ | Debit card',
          amount:'12',
          fractionalPartOfTheAmount:'02',
          isBottomDividerNeed: true,
          isChevronNeed: false,
          isDisabled: true
        },
        {
          id: faker.datatype.uuid(),
          title:'Stop and Shop',
          subtitle:'Pay day! Yay!',
          amount:'236',
          fractionalPartOfTheAmount:'52',
          isBottomDividerNeed: true,
          isChevronNeed: false,
          isDisabled: true
        },
        {
          id: faker.datatype.uuid(),
          title:'Lencrafters',
          subtitle:'Paramus NJ | Debit card',
          amount:'320',
          fractionalPartOfTheAmount:'73',
          isBottomDividerNeed: false,
          isChevronNeed: false,
          isDisabled:true
        }
      ]
    },
    {
      id: faker.datatype.uuid(),
      title: 'Jul 9',
      cards: [
        {
          id: faker.datatype.uuid(),
          title:'Target',
          subtitle:'Closter NJ | Debit card',
          amount:'63',
          fractionalPartOfTheAmount:'95',
          isBottomDividerNeed: true,
          isChevronNeed: false,
          isDisabled:true
        },
        {
          id: faker.datatype.uuid(),
          title:'Aplpay 7-Eleven',
          subtitle:'Cresskill NJ | iPhone',
          amount:'17',
          fractionalPartOfTheAmount:'75',
          isBottomDividerNeed: true,
          isChevronNeed: false,
          isDisabled:true
        },
        {
          id: faker.datatype.uuid(),
          generalIcon: (
            <Image style={styles.generalIcon} source={require('../../../assets/icons/confetti2.png')}/>
          ),
          title:'Facebook inc',
          subtitle:'Pay day! Yay!',
          titleColorNeed: true,
          subTitleColorNeed: true,
          amountColorNeed: true,
          amount:'1,200',
          fractionalPartOfTheAmount:'50',
          isBottomDividerNeed: true,
          isChevronNeed: false,
          isDisabled:true
        },
        {
          id: faker.datatype.uuid(),
          title:'Lencrafters',
          subtitle:'Paramus NJ | Debit card',
          amount:'320',
          fractionalPartOfTheAmount:'73',
          isBottomDividerNeed: false,
          isChevronNeed: false,
          isDisabled:true
        }
      ]
    },
  ];

  return (
    <SafeAreaView style={globalStyles.flex}>
      <Header 
        left={
          <TouchableOpacity onPress={handleNavigationGoBack} style={styles.touchableOpacity}>
            <Image source={require('../../../assets/icons/back.png')} style={styles.iconSize}/>
          </TouchableOpacity>
        }
        center={
          <View style={styles.centerHeader}>
            <CustomText style={styles.title}>Checking</CustomText>
            <CustomText style={styles.subtitle}>{subtitle}</CustomText>
          </View>
        }
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
          <CustomText style={styles.screenSubtitle}>Total available cash</CustomText>
        </View>
        <View style={styles.filterContainer}>
          <TextInput
            style={styles.inputContainer}
            value={filterData}
            placeholder="Search transactions"
            onChange={(text) => setFilterData(text.nativeEvent.text)}
          />
          <Button 
            buttonStyle={styles.filterBy} 
            disabledStyle={styles.disabledButton}
            titleStyle={styles.filterByText}
            disabled={!filterData}
            title='Filter by'
            onPress={handleFilterData}
          />
        </View>
        <View style={styles.contentContainer}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            legacyImplementation={false}
            data={checkingList}
            keyExtractor={(item) => item.id}
            renderItem={({item, index}) => {
              return (
                <View key={index} style={styles.flatListView}>
                  <CustomText>{item.title}</CustomText>
                  {
                    item.cards.map((item, index) => (
                      <CardAction 
                        item={item} 
                        key={index} 
                        index={index} 
                        handleNavigationToScreen={handleNavigationToScreen}
                      />
                    ))
                  }
                </View>
              )
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  )
};

const styles = EStyleSheet.create({
  iconSize: {
    width: 20,
    height: 20,
    resizeMode: 'contain'
  },
  touchableOpacity: {
    left: -4
  }, 
  title: {
    color: 'white', 
    fontSize: 16,
    lineHeight: 22
  },
  subtitle : {
    color: 'white', 
    fontSize: 10
  },
  centerHeader: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  titleContainer: {
    flex: 1, 
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 30,
    height: 70
  },
  generalAmount: {
    fontSize: 26,
    lineHeight: 32,
  },
  fractionalPartOfTheAmount: {
    fontSize: 18
  },
  screenSubtitle: {
    fontSize: 12,
    lineHeight: 18,
    color: globalStyles.defaultColor
  },
  filterBy: {
    backgroundColor: globalStyles.themeColor,
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 4
  },
  filterByText:{ 
    color: 'white',
    fontSize: 14,
    lineHeight: 20,
  },
  disabledButton: {
    borderWidth: 1,
    borderColor: '#A0A0A0'
  },
  filterContainer: {
    flex: 1, 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'center', 
    height: 32
  },
  inputContainer: {
    backgroundColor: 'white', 
    paddingHorizontal: 14,
    paddingVertical: 4,
    borderRadius: 20,
    borderWidth: 0.5,
    borderColor: globalStyles.defaultColor,
    width: CURRENT_WIDTH - 150,
    marginRight: 20,
  },
  contentContainer: {
    flex: 8,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 10,
    paddingHorizontal: 10
  },
  generalIcon: {
    marginRight:12
  },
  flatListView: {
    flex: 1, 
    alignItems: 'flex-start', 
    justifyContent: 'center', 
    width: CURRENT_WIDTH - 30, 
    marginTop: 20
  }
});

export default CheckingView;
