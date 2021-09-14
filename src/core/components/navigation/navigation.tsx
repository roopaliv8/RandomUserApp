import DetailsScreen from '@app/modules/main/screens/details_screen/details_screen';
import MainScreen from '@app/modules/main/screens/main_screen/main_screen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

const Stack = createStackNavigator();
export default function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Main" component={MainScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} initialParams={
        { email: '' }
      }/>
    </Stack.Navigator>
  );
}