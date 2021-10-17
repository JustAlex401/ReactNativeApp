import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';
import EStyleSheet from 'react-native-extended-stylesheet';
import globalStyles from '../../../assets/styles';
import CustomText from '../CustomText';

export default GivingCard = ({item, index}) => {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.cardHeader}>
        <Image style={styles.titleIcon} source={require('../../../assets/icons/avatar.png')}/>
        <View style={styles.titleAndSubtitle}>
          <CustomText style={styles.title}>{item.title}</CustomText>
          <CustomText style={styles.subtitle}>{item.subtitle}</CustomText>
        </View>
      </View>
      <View style={styles.cardContent}>
        
      </View>
      <View style={styles.cardFooter}>
        <CustomText style={styles.footerMessage}>
          {item.message}
        </CustomText>
        <TouchableOpacity
          onPress={() => console.log('Share to spread the world')}
          style={styles.touchableOpacity}
        >
          <Icon name='forward' type='entypo' size={20} color='white'/>
          <CustomText style={styles.buttonText}>Share to spread the world</CustomText>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = EStyleSheet.create({
  rootContainer: {
    flex: 1,
    borderRadius: 7,
    borderWidth: 0.5,
    borderColor: globalStyles.defaultColor,
    backgroundColor: 'white',
    marginTop: 15,
    height: 350,
  },
  cardHeader: {
    flex: 1, 
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 15
  },
  titleAndSubtitle: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft: 15
  },
  cardContent: {
    flex: 2, 
    justifyContent: 'center',
    alignItems: 'center'
  },
  cardFooter: {
    flex: 2, 
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 24
  },
  footerMessage: {
    fontSize: 15,
    marginVertical: 10
  },
  touchableOpacity: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 20,
    height: 40,
    width: 300,
    backgroundColor: globalStyles.themeColor,
    paddingHorizontal: 60
  },
  buttonText: {
    color: 'white',
    fontSize: 13
  },
  title: {
    fontSize: 16
  },
  subtitle: {
    fontSize: 13,
    color: globalStyles.defaultColor
  },
  titleIcon: {
    width: 40,
    height: 40
  }
});