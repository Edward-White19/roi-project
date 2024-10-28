import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import ErrorScreen from '../screens/ErrorScreen';
import SignUpScreen from '../screens/SignInScreen';

const Stack = createStackNavigator();

export default function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen
        name='Login'
        component={LoginScreen}
      />
      <Stack.Screen
        name='SignUp'
        component={SignUpScreen}
      />
      <Stack.Screen
        name='Error'
        component={ErrorScreen}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({

});