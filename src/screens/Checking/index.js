import React, { useState } from 'react';
import CheckingView from './CheckingView';

const CheckingScreen = (props) => {

  const [filterData, setFilterData] = useState();

  const handleNavigationGoBack = () => {
    props.navigation.goBack();
  };

  const handleNavigationToScreen = (screenName, params) => {
    props.navigation.navigate(screenName, params ? params : null);
  };

  const handleFilterData = () => {
    console.log(filterData);
  };

  return (
    <CheckingView 
      subtitle={props.route.params.subtitle} 
      handleNavigationGoBack={handleNavigationGoBack}
      handleNavigationToScreen={handleNavigationToScreen}
      filterData={filterData}
      setFilterData={setFilterData}
      handleFilterData={handleFilterData}
    />
  );
};

export default CheckingScreen;
