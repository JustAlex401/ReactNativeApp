import React, { useEffect, useState } from 'react';
import HomeView from './HomeView';
import moment from 'moment';

const DAYPART = ['Good Morning', 'Good Afternoon', 'Good Evening'];

const HomeScreen = (props) => {

  const [fullDate, setDate] = useState({
    day: '',
    month: '',
    year: '',
    dayPart: ''
  });

  useEffect(() => {
    let currentDate = moment()
                  .utcOffset('+02:12')
                  .format('DD-MMM-YYYY').split('-');
    let hours = new Date().getHours();
    let dayPart = '';
    if(hours < 12){
      dayPart = DAYPART[0];
    } else if(hours < 18) {
      dayPart = DAYPART[1];
    } else {
      dayPart = DAYPART[2];
    };

    setDate({...fullDate, day: currentDate[0], month: currentDate[1], year: currentDate[2], dayPart: dayPart});
  }, []);

  const handleNavigationToScreen = (screenName, params) => {
    props.navigation.navigate(screenName, params ? params : null);
  };

  const handleOpenDrawer = () => {
    props.navigation.openDrawer();
  };

  return (
    <HomeView 
      handleOpenDrawer={handleOpenDrawer} 
      handleNavigationToScreen={handleNavigationToScreen}
      fullDate={fullDate}
    />
  );
};

export default HomeScreen;
