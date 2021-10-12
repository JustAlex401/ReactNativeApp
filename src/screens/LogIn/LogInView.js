import React from 'react';
import {
  SafeAreaView,
  View,
  TouchableOpacity
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import CustomText from '../../components/CustomText';
import globalStyles from '../../../assets/styles';
import { Input } from 'react-native-elements';
import { Icon } from 'react-native-elements'

const LogInView = ({isKeyboardOpen}) => {
  return (
    <SafeAreaView style={globalStyles.flex}>
      <View style={styles.content}>
        <View style={styles.titleView}>
          <CustomText style={styles.title}>Login</CustomText>
        </View>
        <View style={styles.inputView}>
          <Input 
            placeholder="Your email address" 
            label="Email" 
            labelStyle={styles.inputLabelStyle} 
            style={styles.input} 
            containerStyle={styles.inputContainer}
          />
          <Input 
            placeholder="Password" 
            label="Password" 
            labelStyle={styles.inputLabelStyle} 
            style={styles.input} 
            containerStyle={styles.inputContainer}
            secureTextEntry={true} 
          />
        </View>
        <View style={styles.forgotPasswordView}>
          <TouchableOpacity onPress={() => console.log('Forgot password')}>
            <CustomText style={styles.forgotPassword}>FORGOT PASSWORD</CustomText>
          </TouchableOpacity>
        </View>
        <View style={styles.logInView}>
          <View style={styles.buttonSize}>
            <TouchableOpacity style={styles.logIn} onPress={() => console.log('LogIn')}>
              <CustomText style={styles.logInText}>LOGIN</CustomText>
            </TouchableOpacity>
          </View>
        </View>
        {isKeyboardOpen ? 
            null
          :
            <View style={styles.logInWaysView}>
              <CustomText style={styles.logInWaysText}>Lets test two ways to login</CustomText>
              <View style={styles.logInButtonsView}>
                <TouchableOpacity style={styles.logInWaysButton} onPress={() => console.log('Touch ID')}>
                  <Icon name='fingerprint' type='entypo' size={16} />
                  <CustomText style={styles.logInWaysButtonText}>Touch ID</CustomText>
                </TouchableOpacity>
                <TouchableOpacity style={styles.logInWaysButton} onPress={() => console.log('Face ID')}>
                  <Icon name='slightly-smile' type='fontisto' size={16} />
                  <CustomText style={styles.logInWaysButtonText}>Face ID</CustomText>
                </TouchableOpacity>
              </View>
            </View>
        }
      </View>
    </SafeAreaView>
  )
};

const styles = EStyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 26,
    marginBottom: 6
  },
  titleView: {
    width: 68,
    borderBottomWidth: 2,
    borderBottomColor: globalStyles.themeColor
  },
  content: {
    paddingHorizontal: 30,
    paddingVertical: 40,
    flex: 1,
    flexDirection: 'column'
  },
  inputView: {
    marginTop: 40
  },
  input: {
    padding: 0,
    fontSize: 16
  },
  inputLabelStyle: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  inputContainer: {
    paddingHorizontal: 0
  },
  forgotPassword: {
    fontSize: 12,
    fontWeight: 'bold',
    color: globalStyles.themeColor
  },
  forgotPasswordView: {
    alignItems: 'flex-end'
  },
  logInView: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  buttonSize: {
    height: 40, width: '100%'
  },
  logIn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: globalStyles.themeColor,
    borderRadius: 20
  },
  logInText:{ 
    color: 'white',
    fontSize: 14
  },
  logInWaysView: {
    marginTop: 60, 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'flex-end'
  },
  logInWaysText: {
    fontSize: 15
  },
  logInButtonsView: {
    flex: 1, 
    flexDirection: 'row', 
    alignItems: 'flex-end', 
    justifyContent: 'flex-end', 
    marginTop: 55
  },
  logInWaysButton: {
    flex: 1, 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between', 
    borderWidth: 1, 
    borderRadius: 20, 
    padding: 5, 
    height: 35, 
    marginHorizontal: 15, 
    maxWidth: 120, 
    paddingHorizontal: 20 
  },
  logInWaysButtonText: {
    fontSize: 12
  }
});

export default LogInView;
