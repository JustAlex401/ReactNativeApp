
import React, { useState } from 'react';
import { Image, Modal, SafeAreaView, TouchableOpacity, View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { useDispatch } from 'react-redux';
import CustomText from '../CustomText';
import { logoutUser } from './actions';

export default UserProfile = () => {

  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logoutUser());
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
        <Image source={require('../../../assets/icons/oval.png')} style={styles.iconSize}/>
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
  iconSize: {
    width: 25,
    height: 25,
    resizeMode: 'contain'
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
    marginTop: 50, 
    marginRight: 10
  },
  modal: {
    height: 60, 
    width: 100, 
    backgroundColor: 'white'
  },
  modalContentView: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center'
  }
});