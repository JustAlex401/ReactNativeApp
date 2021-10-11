import React from 'react';

import CardsScreen from '../../../screens/Cards';
import { createStackNavigator } from '@react-navigation/stack';

const CardsStackElement = createStackNavigator();

export default CardsStack = () => {
  return (
    <CardsStackElement.Navigator screenOptions={{headerShown: false}}>
      <CardsStackElement.Screen name="CardsScreen" component={CardsScreen} />
    </CardsStackElement.Navigator>
  );
};