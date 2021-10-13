import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'react-native';
import AsyncStorage from "@react-native-community/async-storage";
import AppStack from './stack/AppStack';
import AuthStack from './stack/AuthStack';
import globalStyles from '../../assets/styles';

const Stack = createStackNavigator();

class Navigator extends React.Component {

  constructor(props) {
    super(props);
    this.state = {token: ''};
  };

  async componentDidMount() {
    const token = await AsyncStorage.getItem('id_token');
    this.setState({token});
  }
  

  render() {

    const { token } = this.state;

    return (
      <>
        <StatusBar
          backgroundColor={globalStyles.themeColor}
        />
        <Stack.Navigator >
          {token ? 
              <Stack.Screen
                name="App"
                component={AppStack}
                options={{headerShown: false}}
              />
            :
              <Stack.Screen
                name="Auth"
                component={AuthStack}
                options={{headerShown: false}}
              />
          }
        </Stack.Navigator>
      </>
    );
  };
};

export default Navigator;
