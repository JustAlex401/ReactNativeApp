import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { ListItem } from 'react-native-elements';
import EStyleSheet from 'react-native-extended-stylesheet';
import globalStyles from '../../../assets/styles';
import CustomText from '../CustomText';

export default CardAction = ({item, index, handleNavigationToScreen}) => {
  return (
    <View key={index} style={styles.rootWidth}>
      <ListItem bottomDivider={item.isBottomDividerNeed}>
        <TouchableOpacity 
          disabled={item.isDisabled}
          style={styles.opacityView}
          onPress={() => handleNavigationToScreen(item.navigationScreenName, item.routerParam)}
        >
          {item.generalIcon &&
            item.generalIcon
          }
          <ListItem.Content>
            <ListItem.Title style={item.titleColorNeed && styles.textColor}>{item.title} {item.isTitleIconNeed && 
              <Image source={require('../../../assets/icons/heart.png')}/>
            }</ListItem.Title>
            <ListItem.Subtitle style={item.subTitleColorNeed && styles.textColor}>{item.subtitle}</ListItem.Subtitle>
          </ListItem.Content>
          <CustomText style={item.amountColorNeed ? [styles.amount, styles.textColor] : styles.amount}>
            ${item.amount}.
            <CustomText
              style={styles.fractionalPartOfTheAmount}
            >
              {item.fractionalPartOfTheAmount}
            </CustomText>
          </CustomText>
          {item.isChevronNeed &&
            <ListItem.Chevron color={globalStyles.themeColor} size={30}/>
          }
        </TouchableOpacity>          
      </ListItem>
      {item.footer &&
        item.footer
      }
    </View>
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
  },
  rootWidth: {
    width: '100%'
  },
  textColor: {
    color: '#32CD32'
  }
});