
import React from 'react';
import { Image, Platform, SafeAreaView, TouchableOpacity, View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import CustomText from '../CustomText';
import globalStyles from '../../../assets/styles';
import bottomBarImagesPath from '../../utils/bottomBarImagesPath';
import { BlurView } from '@react-native-community/blur'

export default TabBar = ({state, descriptors, navigation}) => {
  return (
    <SafeAreaView edges={['bottom']} style={Platform.OS === 'ios' ? styles().mainContainerIos : styles().mainContainerAndroid}>
      {Platform.OS === 'ios' && 
        <BlurView
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0, 
            left: 0,
            right: 0
          }}
          blurType="light"
          blurAmount={10}
          reducedTransparencyFallbackColor="white"
        />
      }
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
  mainContainerIos: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0
  },
  mainContainerAndroid: {
    backgroundColor: 'white'
  },
  container: {
    flex: 0,
    height: Platform.OS === 'ios' ? 80 : 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  tabItemContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Platform.OS === 'ios' ? -10 : 0
  },
  text: {
    fontSize: 10,
    lineHeight: 16,
    color: isFocused ? globalStyles.themeColor : globalStyles.defaultColor
  }
});