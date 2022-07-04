/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Login from './src/components/screens/Login';
import SignUp from './src/components/screens/SignUp';
import List from './src/components/screens/List';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';
import {store} from './src/Redux/store';


const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen
              name="Register"
              component={SignUp}
              options={{headerShown: false}}
            />
            <Stack.Screen name="Home" component={List} />
          </Stack.Navigator>
        </NavigationContainer>
    </Provider>
  );
};

export default App;
