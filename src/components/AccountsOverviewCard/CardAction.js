import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { ListItem } from 'react-native-elements';
import EStyleSheet from 'react-native-extended-stylesheet';
import globalStyles from '../../../assets/styles';
import CustomText from '../CustomText';

export default CardAction = ({item, index, handleNavigationToScreen}) => {
  return (
    <ListItem key={index} bottomDivider={index !== 2 ? true : false}>
      <TouchableOpacity 
        style={styles.opacityView}
        onPress={() => handleNavigationToScreen(item.navigationScreenName, item.routerParam)}
      >
        <ListItem.Content>
          <ListItem.Title>{item.title} {index === 2 && 
            <Image source={require('../../../assets/icons/heart.png')}/>
          }</ListItem.Title>
          <ListItem.Subtitle>{item.subtitle}</ListItem.Subtitle>
        </ListItem.Content>
        <CustomText style={styles.amount}>
          ${item.amount}.
          <CustomText
            style={styles.fractionalPartOfTheAmount}
          >
            {item.fractionalPartOfTheAmount}
          </CustomText>
        </CustomText>
        <ListItem.Chevron color={globalStyles.themeColor} size={30}/>
      </TouchableOpacity>            
    </ListItem>
  );
};

const styles = EStyleSheet.create({
  amount: {
    fontSize: 20,
    paddingRight: 7
  },
  fractionalPartOfTheAmount: {
    fontSize: 15
  },
  opacityView: {
    flex: 1, 
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
});