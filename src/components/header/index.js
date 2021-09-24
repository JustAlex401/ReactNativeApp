import React from 'react';
import { Header } from 'react-native-elements';
import cutsomStyles from '../../../assets/styles';
import HeaderTitle from './HeaderTitle';
import LeftHeader from './LeftHeader';
import RightHeader from './RightHeader';

export default HeaderElement = ({navigation, title}) => {

  return (
    <Header
      backgroundColor={cutsomStyles.themeColor}
      leftComponent={ props => <LeftHeader navigation={navigation}/>}
      centerComponent={ props => <HeaderTitle title={title}/>}
      rightComponent={ props => <RightHeader/>}
    />
  );
};
