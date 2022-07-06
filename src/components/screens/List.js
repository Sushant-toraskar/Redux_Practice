import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {store} from '../../Redux/store';

import {useSelector} from 'react-redux';
import Details from './Details';
import { useDispatch } from 'react-redux';
import {CLEAR_STORAGE} from '../../Redux/action'

function List({navigation}) {
  const state = useSelector(state => state);
  console.log('List data : ', store.getState().user.data[0]);
  const Users = store.getState()?.user?.data;
  const dispatch = useDispatch()
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <FlatList
      style = {{
        width : '90%',
        padding : 'auto'

      }}
        data={Users}
        keyExtractor={item => item.fname.toString()}
        renderItem={item => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('Details', item.item)}
              style={{
                height: 50,
                width: '100%',
                borderWidth: 1,
                marginTop: '5%',
                backgroundColor: 'red',
                justifyContent : 'center',
                alignItems:'center'
              }}>
              <Text>{item.item.fname} {item.item.lname}</Text>
            </TouchableOpacity>
          );
        }}
      />

      <View>
        <TouchableOpacity
        style={{
          borderWidth :1,
          padding : 5
        }}
        onPress={() => dispatch({type:CLEAR_STORAGE})}>
          <Text style = {
            {
              fontSize : 20,
              fontWeight : '300'
          
          }}>Clear Storage</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default List;
