import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
const InputComponent = props => {
  const {title, ...restProps} = props;
  // const [name, setName] = useState('');
  // console.log(pass);
  return (
    <View
      style={{
        shadowColor: '#171717',
        // shadowRadius: 5,
        shadowOffset: {width: 2, height: 3},
        shadowOpacity: 0.2,
        borderRadius: 5,
        backgroundColor: 'white',
      }}>
      <Text
        style={{
          fontSize: 13,
          color: '#73777B',
        }}>
        {title}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          minHeight: 30,
          width: '80%',
        }}>
        <TextInput
          {...restProps}
          placeholder={`Enter the ${title}`}
          style={{
            backgroundColor: 'white',
            width: '80%',
            flex: 0.9,
          }}></TextInput>
      </View>
    </View>
  );
};

export default InputComponent;
