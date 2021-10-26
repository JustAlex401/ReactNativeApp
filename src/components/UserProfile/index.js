
import React, { useState } from 'react';
import { Image, Modal, Platform, SafeAreaView, TouchableOpacity, View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { useDispatch, useSelector } from 'react-redux';
import CustomText from '../CustomText';
import { logoutUser } from './actions';

export default UserProfile = ({handleNavigationToScreen}) => {

  const avatar = useSelector(state => state.userReducer.data.avatar);
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logoutUser());
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
        <Image source={avatar ? {uri: avatar} : require('../../../assets/icons/oval.png')} style={styles.avatar}/>
      </TouchableOpacity>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableOpacity onPressOut={() => setModalVisible(false)} style={styles.modalView}>
          <View style={styles.modal}>
            <View style={styles.modalContentView}>
              <TouchableOpacity onPress={() => handleNavigationToScreen('ProfileScreen')}>
                <CustomText>Profile</CustomText>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleLogOut}>
                <CustomText>Log out</CustomText>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
    </SafeAreaView>
  );
};

const styles = EStyleSheet.create({
  avatar: {
    width: 26,
    height: 26,
    resizeMode: 'contain',
    borderRadius: 1000
  },
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  modalView: {
    flex: 1, 
    justifyContent: 'flex-start', 
    alignItems: 'flex-end', 
    marginTop: Platform.OS === 'ios' ? 100 : 50, 
    marginRight: 10
  },
  modal: {
    height: 100, 
    width: 100, 
    backgroundColor: 'white',
    paddingVertical: 20
  },
  modalContentView: {
    flex: 1, 
    justifyContent: 'space-between', 
    alignItems: 'center'
  }
});