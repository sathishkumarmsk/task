import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../Screen/App/Auth/LoginScreen';

import ProductList from '../Screen/App/Home/ProductList';
const Stack = createStackNavigator();

function AuthStackNavigator(): JSX.Element {
  return (
    <Stack.Navigator
      initialRouteName="LoginScreen"
      screenOptions={{gestureEnabled: false, headerShown: false}}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />

      <Stack.Screen name="ProductList" component={ProductList} />
    </Stack.Navigator>
  );
}

export default AuthStackNavigator;
