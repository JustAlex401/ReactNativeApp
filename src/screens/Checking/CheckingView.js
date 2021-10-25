import React from 'react';
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  TextInput
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import CustomText from '../../components/CustomText';
import Header from '../../components/Header';
import UserProfile from '../../components/UserProfile';
import globalStyles from '../../../assets/styles';
import { Button } from 'react-native-elements';

const CURRENT_WIDTH = Dimensions.get('window').width;

const CheckingView = ({
  subtitle, 
  handleNavigationGoBack, 
  handleNavigationToScreen,
  filterData,
  setFilterData,
  handleFilterData
}) => {
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
      <View style={globalStyles.sectionContainer}>
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
    flex: 0, 
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
    flex: 0, 
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
  }
});

export default CheckingView;
