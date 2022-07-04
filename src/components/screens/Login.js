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

  import InputComponent from '../customComponents/InputComponent';
  const Login = ({navigation}) => {
  const [name,setName] = useState('')

  return (
    <SafeAreaView style={styles.mainContainer}>
  
    <View style = {{
      borderColor : 'black',
      borderWidth : 1,
      height : '40%',
      width : '80%',
      alignItems : 'center',
      justifyContent : 'space-around',
    }}>
        <View style={{
            height : '70%',
            width : '100%',
            alignItems : 'center',
      justifyContent : 'space-around',
        }}>
            <View>
        <Text>Login</Text>
        <Text>
      signup to continue
    </Text>
    </View>
      <InputComponent
      title = {'Username'}
      />
      <InputComponent
      title = {'Password'}
      />
      <View style={{
          width : '75%',
          height : '15%',
          alignItems : 'flex-end',
          justifyContent : 'center'
      }}>
      <TouchableOpacity onPress = {()=> {
          navigation.navigate('Register')
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
export default Login;