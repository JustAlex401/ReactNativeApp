import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CardsScreen from '../../screens/CardsScreen';

const CardsStack = createNativeStackNavigator();

export default CardsStackScreen = () => {
  return (
    <CardsStack.Navigator>
      <CardsStack.Screen name="Cards" component={CardsScreen} />
    </CardsStack.Navigator>
  );
};