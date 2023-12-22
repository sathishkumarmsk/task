import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AuthStackNavigator from './AuthStackNavigator';

export type StackNavigatorParamList = {
  AuthStack: undefined;
};

const Stack = createStackNavigator<StackNavigatorParamList>();

function AuthNavigator(): JSX.Element {
  return (
    <Stack.Navigator
      initialRouteName="AuthStack"
      screenOptions={{
        gestureEnabled: false,
        headerShown: false,
      }}>
      <Stack.Screen name="AuthStack" component={AuthStackNavigator} />
    </Stack.Navigator>
  );
}

export default AuthNavigator;
