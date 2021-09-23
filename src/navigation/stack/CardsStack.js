import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CardsScreen from '../../screens/CardsScreen';

const CardsStackElement = createNativeStackNavigator();

export default CardsStack = () => {
  return (
    <CardsStackElement.Navigator>
      <CardsStackElement.Screen name="Cards" component={CardsScreen} />
    </CardsStackElement.Navigator>
  );
};