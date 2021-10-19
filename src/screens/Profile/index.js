import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editProfile } from './actions';
import ProfileView from './ProfileView';

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

  return (
    <ProfileView 
      handleNavigationGoBack={handleNavigationGoBack}
      userData={userData}
      isEditProfileOpen={isEditProfileOpen}
      setEditProfileOpen={setEditProfileOpen}
      profileData={profileData}
      setProfileData={setProfileData}
      handleEditProfile={handleEditProfile}
    />
  )
};

export default ProfileScreen;
