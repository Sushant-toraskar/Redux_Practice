import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import InputComponent from '../assets/InputComponent';
const Register = ({navigation}) => {
  const [name, setName] = useState('');
  const [formValues, setFormValues] = useState({
    fname: '',
    lname: '',
    email: '',
    password : ''
  });

// useEffect(()=>{
//   console.log("Form updated: ", formValues);
// }, [formValues])

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View
        style={{
          //   borderColor : 'black',
          //   borderWidth : 1,
          flex: 1,
          alignItems: 'center',
          justifyContent: 'space-around',
        }}>
        <View
          style={{
            flex: 0.5,
            alignItems: 'center',
            justifyContent: 'space-around',
          }}>
          <View>
            <Text
              style={{
                fontSize: 25,
                fontWeight: '800',
              }}>
              Register
            </Text>
            <Text>signup to continue</Text>
          </View>
          <InputComponent
            title={'First Name'}
            maxLength={10}
            onChangeText={(val)=>setFormValues({...formValues, fname: val})}
            value={formValues.fname}
          />
          <InputComponent title={'Last Name'}
           maxLength={10}
            onChangeText={(val)=>setFormValues({...formValues, lname: val})}
            value={formValues.lname}/>
          <InputComponent title={'Email Id'} 
          maxLength={10}
          onChangeText={(val)=>setFormValues({...formValues, email: val})}
          value={formValues.email}/>
          <InputComponent title={'Password'} 
          maxLength={10}
          onChangeText={(val)=>setFormValues({...formValues, password: val})}
          value={formValues.password}/>
          <View
            style={{
              width: '75%',
              height: '15%',
              alignItems: 'flex-end',
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Home');
                console.log('',formValues);
              }}
              style={{
                backgroundColor: 'skyblue',
                padding: '3%',
              }}>
              <Text>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
export default Register;
