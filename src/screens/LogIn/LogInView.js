import React from 'react';
import {
  SafeAreaView,
  View,
  TouchableOpacity
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import CustomText from '../../components/CustomText';
import globalStyles from '../../../assets/styles';
import { Button, Input, Icon } from 'react-native-elements';

const LogInView = ({
  isKeyboardOpen, 
  userLogInData,
  handleLogIn, 
  loading, 
  validateEmail, 
  emailIsInvalide,
  validatePassword,
  passwordIsInvalide,
  loginError
}) => {
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
            onChangeText={email => validateEmail(email)}
          />
          <Input 
            placeholder="Password" 
            label="Password" 
            labelStyle={styles.inputLabelStyle} 
            style={styles.input} 
            containerStyle={styles.inputContainer}
            secureTextEntry={true} 
            onChangeText={password => validatePassword(password)}
          />
        </View>
        <View style={styles.forgotPasswordView}>
          <TouchableOpacity onPress={() => console.log('Forgot password')}>
            <CustomText style={styles.forgotPassword}>FORGOT PASSWORD</CustomText>
          </TouchableOpacity>
        </View>
        {loginError ? 
            <View style={styles.errorMessage}>
              <CustomText style={{color: globalStyles.themeColor, fontSize: 15}}>{loginError}</CustomText>
            </View>
          :
            null
        }
        <View style={styles.logInView}>
          <View style={styles.buttonSize}>
            <Button 
              buttonStyle={styles.logIn} 
              disabledStyle={styles.disabledButton}
              titleStyle={styles.logInText}
              disabled={!loading && userLogInData.email && userLogInData.password && !emailIsInvalide && !passwordIsInvalide ? false : true}
              title='LOGIN'
              onPress={handleLogIn}
              loading={loading}
            />
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
    fontSize: 24,
    marginBottom: 6,
    lineHeight: 30
  },
  titleView: {
    width: 62,
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
    fontSize: 16,
    lineHeight: 22
  },
  inputLabelStyle: {
    fontSize: 20,
    lineHeight: 26,
    fontWeight: 'bold',
  },
  inputContainer: {
    paddingHorizontal: 0
  },
  forgotPassword: {
    fontSize: 12,
    lineHeight: 18,
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
    height: 40, 
    width: '100%'
  },
  logIn: {
    height: 40,
    backgroundColor: globalStyles.themeColor,
    borderRadius: 20
  },
  logInText:{ 
    color: 'white',
    fontSize: 14,
    lineHeight: 20,
  },
  logInWaysView: {
    marginTop: 60, 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'flex-end'
  },
  logInWaysText: {
    fontSize: 16,
    lineHeight: 22,
  },
  logInButtonsView: {
    flex: 1, 
    flexDirection: 'row', 
    alignItems: 'flex-end', 
    justifyContent: 'flex-end', 
    marginTop: 50
  },
  logInWaysButton: {
    flex: 1, 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between', 
    borderWidth: 1, 
    borderRadius: 20, 
    padding: 4, 
    height: 34, 
    marginHorizontal: 16, 
    maxWidth: 120, 
    paddingHorizontal: 20 
  },
  logInWaysButtonText: {
    fontSize: 12,
    lineHeight: 18,
  },
  disabledButton: {
    borderWidth: 1,
    borderColor: '#A0A0A0'
  },
  errorMessage: {
    flex: 0, 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginTop: 10
  }
});

export default LogInView;
