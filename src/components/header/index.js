import React from 'react';
import { Header } from 'react-native-elements';
import cutsomStyles from '../../../assets/styles';
import HeaderTitle from './HeaderTitle';
import LeftHeader from './LeftHeader';
import LeftHomeHeader from './LeftHomeHeader';
import RightHeader from './RightHeader';

export default HeaderElement = ({route, navigation, title}) => {

  return (
    <Header
      backgroundColor={cutsomStyles.themeColor}
    >
      {route === 'HomeScreen' ? <LeftHomeHeader navigation={navigation}/> : <LeftHeader navigation={navigation}/>}
      <HeaderTitle title={title}/>
      <RightHeader/>
    </Header>
  );
};
