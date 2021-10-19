import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editProfile, saveAvatar } from './actions';
import ProfileView from './ProfileView';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import requestCameraPermission from '../../utils/permissionsForCamera';

const ProfileScreen = (props) => {

  const userData = useSelector(state => state.userReducer.data);
  const [isEditProfileOpen, setEditProfileOpen] = useState(false);
  const [profileData, setProfileData] = useState({
    name: null,
    dob: new Date()
  });
  const dispatch = useDispatch();

  const handleNavigationGoBack = () => {
    props.navigation.goBack();
  };

  const handleEditProfile = () => {
    const correctProfileData = {
      ...profileData,
      dob: `${profileData.dob.getDate()}.${profileData.dob.getMonth()}.${profileData.dob.getFullYear()}`
    };
    dispatch(editProfile(correctProfileData.name && correctProfileData.dob ? 
        correctProfileData
      :
        correctProfileData.name ? 
            {name: correctProfileData.name}
          : 
            {dob: correctProfileData.dob}
    ));
    setEditProfileOpen(false);
    setProfileData({
      name: null,
      dob: new Date()
    });
  };

  const openCamera = () => {
    requestCameraPermission();
    let options = {
      storageOptions: {
        path: 'images',
        mediaType: 'photo'
      },
      includeBase64: true
    };
    launchCamera(options, (response) => {
      if(response.didCancel){
        console.log('User cancelled image picker');
      } else if (response.errorCode){
        console.log('Response error' + response.errorCode + response.errorMessage);
      } else {
        const source = 'data:image/jpeg;base64,'+response.assets[0].base64;
        dispatch(saveAvatar(source));
      }
    });
  };

  const launchGallery = () => {
    requestCameraPermission();
    let options = {
      storageOptions: {
        path: 'images',
        mediaType: 'photo'
      },
      includeBase64: true
    };
    launchImageLibrary(options, (response) => {
      if(response.didCancel){
        console.log('User cancelled image picker');
      } else if (response.errorCode){
        console.log('Response error' + response.errorCode + response.errorMessage);
      } else {
        const source = 'data:image/jpeg;base64,'+response.assets[0].base64;
        dispatch(saveAvatar(source));
      }
    });
  };

  return (
    <ProfileView 
      handleNavigationGoBack={handleNavigationGoBack}
      userData={userData}
      isEditProfileOpen={isEditProfileOpen}
      setEditProfileOpen={setEditProfileOpen}
      profileData={profileData}
      setProfileData={setProfileData}
      handleEditProfile={handleEditProfile}
      openCamera={openCamera}
      launchGallery={launchGallery}
    />
  )
};

export default ProfileScreen;
