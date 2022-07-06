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
import Details from './src/components/screens/Details'; 
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';
import { store, persistor } from './src/Redux/store';
import { PersistGate } from 'redux-persist/integration/react';

const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen
              name="Register"
              component={SignUp}
              options={{headerShown: false}}
            />
            <Stack.Screen name="Home" component={List} />
            <Stack.Screen name='Details' component={Details} />
          </Stack.Navigator>
        </NavigationContainer>
        </PersistGate>
    </Provider>
  );
};

export default App;
