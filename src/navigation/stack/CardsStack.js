import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CardsScreen from '../../screens/cards';

const CardsStackElement = createNativeStackNavigator();

export default CardsStack = () => {
  return (
    <CardsStackElement.Navigator screenOptions={{headerShown: false}}>
      <CardsStackElement.Screen name="CardsScreen" component={CardsScreen} />
    </CardsStackElement.Navigator>
  );
};