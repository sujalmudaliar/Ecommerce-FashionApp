import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homescreen from './Homescreen';
import WomensProductsScreen from './WomensProductsScreen';
import MensProductsScreen from './MensProductsScreen';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="HomeMain" component={Homescreen} />
      <Stack.Screen name="WomensProducts" component={WomensProductsScreen} />
      <Stack.Screen name="MensProducts" component={MensProductsScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;