import React, { useRef, useState } from 'react';
import { Image, Platform, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';
import Video from 'react-native-video';
import EStyleSheet from 'react-native-extended-stylesheet';
import globalStyles from '../../../assets/styles';
import CustomText from '../CustomText';

export default GivingCard = ({
  item, 
  index, 
  last,
  visibleVideoNumber
}) => {

  const [videoMute, setVideoMute] = useState(true);
  const [videoControl, setVideoControl] = useState(false);

  const handleControl = () => {
    setVideoControl(!videoControl);
  }

  const handleVideoMute = () => {
    setVideoMute(!videoMute);
  };

  return (
    <View style={last ===  index && Platform.OS === 'ios' ? [styles.rootContainer, styles.marginBottom] : styles.rootContainer}>
      <View style={styles.cardHeader}>
        <Image style={styles.titleIcon} source={require('../../../assets/icons/avatar.png')}/>
        <View style={styles.titleAndSubtitle}>
          <CustomText style={styles.title}>{item.title}</CustomText>
          <CustomText style={styles.subtitle}>{item.subtitle}</CustomText>
        </View>
      </View>
      <TouchableOpacity 
        style={styles.cardContent}
        onPress={handleControl}
      >
        <Video
          style={styles.video}
          source={{uri: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"}}
          paused={visibleVideoNumber === index ? false : true}
          poster='https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg'
          posterResizeMode='cover'
          muted={videoMute}
          controls={videoControl}
        />
        <TouchableOpacity 
          style={styles.voiceButton}
          onPress={handleVideoMute}
        >
          <View>
            <Image source={require('../../../assets/icons/play.png')}/>
          </View>
        </TouchableOpacity>
      </TouchableOpacity>
      
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
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: globalStyles.defaultColor,
    backgroundColor: 'white',
    marginTop: 14,
    height: 420
  },
  marginBottom: {
    marginBottom: 80
  },
  cardHeader: {
    flex: 1, 
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 16
  },
  titleAndSubtitle: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft: 16
  },
  cardContent: {
    flex: 3, 
    justifyContent: 'center',
    alignItems: 'center'
  },
  cardFooter: {
    flex: 2, 
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 24,
    marginTop: -10
  },
  footerMessage: {
    fontSize: 14,
    lineHeight: 20,
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
    paddingHorizontal: 50
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
    lineHeight: 20
  },
  title: {
    fontSize: 16,
    lineHeight: 22,
  },
  subtitle: {
    fontSize: 12,
    lineHeight: 18,
    color: globalStyles.defaultColor
  },
  titleIcon: {
    width: 40,
    height: 40
  },
  video: {
    width: '100%', 
    height: '100%'
  },
  voiceButton: {
    height: 20,
    left: 0,
    right: 30,
    bottom: 30,
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end'
  }
});