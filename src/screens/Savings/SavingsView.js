import React from 'react';
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  Dimensions,
  ScrollView
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import faker from 'faker';
import CustomText from '../../components/CustomText';
import Header from '../../components/Header';
import UserProfile from '../../components/UserProfile';
import globalStyles from '../../../assets/styles';
import { Button } from 'react-native-elements';
import CardAction from '../../components/AccountsOverviewCard/CardAction';

const CURRENT_WIDTH = Dimensions.get('window').width;

const SavingsView = ({
  subtitle, 
  handleNavigationGoBack, 
  handleNavigationToScreen,
  handleFilterData,
  filterData,
  setFilterData
}) => {

  const cardActions = [
    {
      id: faker.datatype.uuid(),
      title:'Deposit',
      subtitle:'Jul 11',
      amount:'2,000',
      titleColorNeed: true,
      amountColorNeed: true,
      fractionalPartOfTheAmount:'00',
      isBottomDividerNeed: true,
      isChevronNeed: false,
      isDisabled: true
    },
    {
      id: faker.datatype.uuid(),
      title:'Savings',
      subtitle:'Jul 11',
      amount:'2,000',
      titleColorNeed: true,
      amountColorNeed: true,
      fractionalPartOfTheAmount:'00',
      isBottomDividerNeed: true,
      isChevronNeed: false,
      isDisabled: true
    },
    {
      id: faker.datatype.uuid(),
      title:'Wire transfer',
      subtitle:'Jul 11',
      amount:'200',
      titleColorNeed: true,
      amountColorNeed: true,
      fractionalPartOfTheAmount:'50',
      isBottomDividerNeed: true,
      isChevronNeed: false,
      isDisabled: true
    },
    {
      id: faker.datatype.uuid(),
      title:'Transfer',
      subtitle:'From checking (...5340) | Jul 11',
      amount:'800',
      titleColorNeed: true,
      amountColorNeed: true,
      fractionalPartOfTheAmount:'65',
      isBottomDividerNeed: true,
      isChevronNeed: false,
      isDisabled: true
    }
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
            <CustomText style={styles.title}>Savings</CustomText>
            <CustomText style={styles.subtitle}>{subtitle}</CustomText>
          </View>
        }
        right={
          <UserProfile handleNavigationToScreen={handleNavigationToScreen}/>
        }
      />
      <View style={[globalStyles.flex]}>
        <View style={styles.titleContainer}>
          <CustomText style={styles.generalAmount}>
            $5,000.
            <CustomText style={styles.fractionalPartOfTheAmount}>
              20
            </CustomText>
          </CustomText>
          <CustomText style={styles.screenSubtitle}>Total available cash</CustomText>
          <Image style={styles.graphicContainer} source={require('../../../assets/icons/savingsGraphV2.png')}/>
        </View>
        <View style={styles.additionalContentContainer}>
          <View style={styles.additionalTitleAndAmountContainer}>
            <View style={styles.additionalTitleAndAmount}>
              <CustomText style={styles.additionalTitle}>Total interest gained</CustomText>
              <CustomText style={styles.additionalAmount}>+$50.00</CustomText>
            </View>
            <View style={styles.additionalTitleAndAmount}>
              <CustomText style={styles.additionalTitle}>Goodness points Gained</CustomText>
              <CustomText style={styles.additionalAmount}>+600</CustomText>
            </View>
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
        </View>
        <View style={styles.contentContainer}>
          <ScrollView contentContainerStyle={styles.contentScrollContainer} style={styles.scrollView}>
            <View style={styles.container}>
              <View style={styles.contentTitle}>
                <CustomText>End day balance - Jul 11</CustomText>
                <CustomText>$5,000</CustomText>
              </View>
              <View style={styles.content}>
                {
                  cardActions.map((item, index) => (
                    <CardAction 
                      item={item} 
                      key={index} 
                      index={index}
                    />
                  ))
                }
              </View>
            </View>
          </ScrollView>
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
    fontSize: 12,
    lineHeight: 18,
  },
  centerHeader: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  titleContainer: {
    flex: 5, 
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 30,
    margin: 0,
    backgroundColor: 'white'
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
  additionalContentContainer: {
    flex: 3, 
    flexDirection: 'column', 
    alignItems: 'center', 
    justifyContent: 'flex-start'
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
    flex: 5,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center'
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
  graphicContainer: {
    flex: 0, 
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    width: 380,
    height: 180
  },
  additionalTitleAndAmount: {
    flex: 0, 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center',
    width: '100%', 
    paddingHorizontal: 20
  },
  filterContainer: {
    flex: 0, 
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  additionalTitle: {
    fontSize: 18
  },
  additionalAmount: {
    fontSize: 18,
    color: '#32CD32'
  },
  additionalTitleAndAmountContainer: {
    flex: 0, 
    alignItems: 'center', 
    justifyContent:'center', 
    marginVertical: 16, 
    width: '100%'
  },
  container: {
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: globalStyles.defaultColor,
    backgroundColor: 'white',
    width: '100%',
    height: 350,
  },
  contentScrollContainer: {
    flex: 0, 
    alignItems: 'center', 
    justifyContent: 'flex-start', 
    paddingVertical: 8
  },
  scrollView: {
    width: '100%', 
    paddingHorizontal: 10
  },
  contentTitle: {
    flex: 0, 
    flexDirection: 'row', 
    height: 50, 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    borderBottomWidth: 0.5, 
    paddingHorizontal: 20
  },
  content: {
    flex: 1, 
    flexDirection: 'column',
    justifyContent: 'center', 
  }
});

export default SavingsView;
