import React,  { useState } from "react";
import {
    View,
    Text,
    TextInput,
} from 'react-native';
const InputComponent = (pass) =>{
  const [name,setName] = useState('')
    console.log(pass);
    return(
        <View style={{
            shadowColor : '#171717',
            // shadowRadius: 5,
            shadowOffset: {width:2, height: 3},
            shadowOpacity: 0.2,
            borderRadius : 5,
            backgroundColor : 'white'
          }}>
          <Text style = {{
            fontSize : 13,
            color : '#73777B'
          }}>{pass.title}</Text>
          <View style = {{
            flexDirection : 'row',
            minHeight : 30,
            width : '80%',
          }}>
            
  
          <TextInput placeholder={`Enter the ${pass.title}`}
          onChangeText={text => setName(text)}
          value={name}
          style={{
            backgroundColor : 'white',
            width : '80%',
            flex : 0.9
          }}
          >
          </TextInput>
          </View>
          </View>
    )
}

export default InputComponent;