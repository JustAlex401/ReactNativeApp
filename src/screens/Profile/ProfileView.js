import React from 'react';
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  Image
} from 'react-native';
import { Button, Icon, Input } from 'react-native-elements';
import EStyleSheet from 'react-native-extended-stylesheet';
import DatePicker from 'react-native-date-picker'
import globalStyles from '../../../assets/styles';
import CustomText from '../../components/CustomText';
import Header from '../../components/Header';

const ProfileView = ({
  handleNavigationGoBack,
  userData,
  isEditProfileOpen,
  setEditProfileOpen,
  profileData,
  setProfileData,
  handleEditProfile,
  openCamera,
  launchGallery
}) => {
  return (
    <SafeAreaView style={globalStyles.flex}>
      <Header 
        left={!isEditProfileOpen &&
          <TouchableOpacity onPress={handleNavigationGoBack} style={styles.touchableOpacity}>
            <Image source={require('../../../assets/icons/back.png')} style={styles.iconSize}/>
          </TouchableOpacity>
        }
        title='Profile'
      />  
      <View style={styles.screen}>
        <View style={styles.titleView}>
          <CustomText style={styles.title}>Profile</CustomText>
        </View>
        {isEditProfileOpen ? 
            <View style={styles.content}>
              <View style={styles.profileData}>
                <Input 
                  value={profileData.name}
                  placeholder="New name" 
                  label="Name" 
                  labelStyle={styles.inputLabelStyle}
                  style={styles.input} 
                  containerStyle={styles.inputContainer}
                  onChangeText={(name) => setProfileData({...profileData, name: name})}
                />
                <DatePicker
                  style={styles.dob}
                  date={profileData.dob}
                  onDateChange={(date) => setProfileData({...profileData, dob: date})}
                  mode='date'
                />
              </View>
              <View style={styles.buttonContent}>
                <Button 
                  buttonStyle={styles.editCancelProfileButtons} 
                  disabledStyle={styles.disabledButton}
                  titleStyle={styles.editProfileText}
                  disabled={profileData.name || profileData.dob ? false : true}
                  title='Edit Profile'
                  onPress={handleEditProfile}
                />
                <Button 
                  buttonStyle={styles.editCancelProfileButtons} 
                  disabledStyle={styles.disabledButton}
                  titleStyle={styles.editProfileText}
                  title='Cancel'
                  onPress={() => setEditProfileOpen(false)}
                />
              </View>
            </View>
          :
            <View style={styles.content}>
              <View style={styles.iconsView}>
                <Image
                  style={styles.avatarStyle}
                  source={{uri: userData.avatar}}
                />
                <TouchableOpacity
                  style={styles.buttonIcon}
                  onPress={openCamera}
                >
                  <Icon type='evilicon' name='camera' color={globalStyles.themeColor}/>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.buttonIcon}
                  onPress={launchGallery}
                >
                  <Icon type='antdesign' name='camera' color={globalStyles.themeColor}/>
                </TouchableOpacity>
              </View>
              <View style={styles.profileData}>
                <View style={styles.data}>
                  <CustomText style={styles.fieldTitle}>Name: </CustomText>
                  <CustomText style={styles.fieldValue}>{userData.name}</CustomText>
                </View>
                <View style={styles.data}>
                  <CustomText style={styles.fieldTitle}>DOB: </CustomText>
                  <CustomText style={styles.fieldValue}>{userData.dob ? userData.dob : 'You did not enter date of birth'}</CustomText>
                </View>
              </View>
              <View style={styles.buttonSize}>
                <Button 
                  buttonStyle={styles.editProfileButton} 
                  disabledStyle={styles.disabledButton}
                  titleStyle={styles.editProfileText}
                  title='Edit Profile'
                  onPress={() => setEditProfileOpen(true)}
                />
              </View>
            </View>
        }
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
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 6,
    lineHeight: 30
  },
  titleView: {
    width: 74,
    borderBottomWidth: 2,
    borderBottomColor: globalStyles.themeColor
  }, 
  screen: {
    paddingHorizontal: 30,
    paddingVertical: 40,
    flex: 1,
    flexDirection: 'column'
  },
  profileData: {
    marginTop: 30,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  data: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  fieldTitle: {
    fontSize: 18,
    color: globalStyles.themeColor
  },
  fieldValue: {
    marginLeft: 10,
    fontSize: 18
  },
  buttonSize: {
    height: 40, 
    width: '100%'
  },
  editProfileButton: {
    height: 40,
    backgroundColor: globalStyles.themeColor,
    borderRadius: 20,
  },
  disabledButton: {
    borderWidth: 1,
    borderColor: '#A0A0A0'
  },
  editProfileText:{ 
    color: 'white',
    fontSize: 16,
    lineHeight: 22,
  },
  content: {
    flex: 1,
    flexDirection: 'column'
  },
  buttonContent: {
    flex: 1,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  },
  editCancelProfileButtons: {
    width: 100,
    height: 40,
    backgroundColor: globalStyles.themeColor,
    borderRadius: 20
  },
  inputLabelStyle: {
    fontSize: 20,
    lineHeight: 26,
    fontWeight: 'bold',
  },
  input: {
    padding: 0,
    fontSize: 16,
    lineHeight: 22
  },
  inputContainer: {
    paddingHorizontal: 0
  },
  dob: {
    backgroundColor: globalStyles.themeColor
  },
  iconsView: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 34,
    height: 100
  },
  avatarStyle: {
    borderRadius: 1000, 
    width: 80, 
    height: 80, 
    borderWidth: 2, 
    borderColor: globalStyles.themeColor
  },
  buttonIcon: {
    borderColor: globalStyles.themeColor, 
    borderRadius: 100, 
    borderWidth: 1,
    padding: 4,
    marginLeft: 15
  }
});

export default ProfileView;
