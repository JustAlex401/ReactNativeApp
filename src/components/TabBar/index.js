
import React from 'react';
import { Image, SafeAreaView, TouchableOpacity, View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import CustomText from '../CustomText';
import globalStyles from '../../../assets/styles';
import bottomBarImagesPath from '../../utils/bottomBarImagesPath';

export default TabBar = ({state, descriptors, navigation}) => {
  return (
    <SafeAreaView edges={['bottom']} style={styles().mainContainer}>
      <View style={styles().container}>
        {state.routes.map((route , index) => {
            const { options } = descriptors[route.key];

            const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

            const isFocused = state.index === index;

            const handleChangeScreen = () => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
              });
    
              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name);
              }
            };
            
            return (
              <TouchableOpacity 
                key={index}
                style={styles().tabItemContainer}
                onPress={handleChangeScreen}
              >
                <Image source={bottomBarImagesPath[index]} style={{ tintColor: isFocused ? globalStyles.themeColor : globalStyles.defaultColor }}/>
                <CustomText style={styles(isFocused).text}>{label}</CustomText>
              </TouchableOpacity>
            );
          })
        }
      </View>
    </SafeAreaView>
  );
};

const styles = (isFocused) => EStyleSheet.create({
  mainContainer: {
    backgroundColor: 'white',
  },
  container: {
    flex: 0,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  tabItemContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 10,
    color: isFocused ? globalStyles.themeColor : globalStyles.defaultColor
  }
});