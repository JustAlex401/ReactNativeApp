import React, { useState } from 'react';
import SavingsView from './SavingsView';

const SavingsScreen = (props) => {

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
    <SavingsView 
      subtitle={props.route.params.subtitle} 
      handleNavigationGoBack={handleNavigationGoBack}
      handleNavigationToScreen={handleNavigationToScreen}
      handleFilterData={handleFilterData}
      filterData={filterData}
      setFilterData={setFilterData}
    />
  );
};

export default SavingsScreen;
