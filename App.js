/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Login from './src/components/screens/Login';
import SignUp from './src/components/screens/SignUp';
import List from './src/components/screens/List';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
        />
        <Stack.Screen name="Register" component={SignUp} options = {{headerShown : false}}/>
        <Stack.Screen name="Home" component={List} 
        options = {{headerShown : false}}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};



export default App;
