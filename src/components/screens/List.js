import React from 'react';
import {SafeAreaView, View, Text,TouchableOpacity} from 'react-native';
import {store} from '../../Redux/store';

import {useSelector} from 'react-redux';

function List() {
  const state = useSelector(state => state);
  console.log('List data : ', store.getState().user.data[0]);
  const Users = store.getState()?.user?.data;
  return (
    <SafeAreaView
      style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}>

        {
          Users.map((user,index) =>{
            return(
              <TouchableOpacity key={index}
        style={{
          height: 50,
          width: '90%',
          borderWidth: 1,
          marginTop: '5%',
        }}>
        <Text>{user.fname+ " " + user.lname}</Text>
      </TouchableOpacity>
            )
          })
        }

      
    </SafeAreaView>
  );
}

export default List;
