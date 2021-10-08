import React from 'react';
import AboutView from './AboutView';

const AboutScreen = ({navigation}) => {

  const handleNavigationToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <AboutView handleNavigationToScreen={handleNavigationToScreen}/>
  );
};

export default AboutScreen;
