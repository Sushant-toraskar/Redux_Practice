import React,{useState} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    Dimensions,
    TextInput,
    TouchableOpacity
  } from 'react-native';

  import InputComponent from '../assets/InputComponent';
  const Register = ({navigation}) => {
  const [name,setName] = useState('')

  return (
    <SafeAreaView style={styles.mainContainer}>
  
    <View style = {{
    //   borderColor : 'black',
    //   borderWidth : 1,
      flex : 1,
      alignItems : 'center',
      justifyContent : 'space-around',
    }}>
        <View style={{
            flex : 0.5,
            alignItems : 'center',
      justifyContent : 'space-around',
        }}>
            <View>
        <Text style={{
            fontSize : 25,
            fontWeight : '800'
        }}>Register</Text>
        <Text>
      signup to continue
    </Text>
    </View>
      <InputComponent
      title = {'First Name'}
      />
      <InputComponent
      title = {'Last Name'}
      />
      <InputComponent
      title = {'Email Id'}
      />
      <InputComponent
      title = {'Password'}
      />
      <InputComponent
      title = {'Confirm Password'}
      />
      <View style={{
          width : '75%',
          height : '15%',
          alignItems : 'flex-end',
          justifyContent : 'center'
      }}>
      <TouchableOpacity onPress = {()=> {
          navigation.navigate('Home')
      }}
      style={{
          backgroundColor : 'skyblue',
          padding : '3%'
      }}
      >
          <Text>
              Submit
          </Text>
      </TouchableOpacity>
      </View>
      </View>
    </View>
      
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    mainContainer: {
      flex : 1,
      alignItems : 'center',
      justifyContent : 'center',
    },
    container: {
      display : 'flex',
      alignItems : 'center',
      justifyContent : 'center',
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