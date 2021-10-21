import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { ListItem } from 'react-native-elements';
import EStyleSheet from 'react-native-extended-stylesheet';
import globalStyles from '../../../assets/styles';
import CustomText from '../CustomText';

export default CardAction = ({item, index, handleNavigationToScreen}) => {
  return (
    <>
      <ListItem key={index} bottomDivider={item.isBottomDividerNeed}>
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
      {item.footer &&
        item.footer
      }
    </>
  );
};

const styles = EStyleSheet.create({
  amount: {
    fontSize: 20,
    lineHeight: 26,
    paddingRight: 8
  },
  fractionalPartOfTheAmount: {
    fontSize: 16,
    lineHeight: 22
  },
  opacityView: {
    flex: 1, 
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
});