import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Details = (props) => {
    console.log('checking params : ',props.route.params);
    let params = props.route.params
  return (
      <View style={{
          flex  :1,
          justifyContent : 'center',
          alignItems : 'center'
      }}>
          <View style = {{
              flex  : 0.5,
              justifyContent : 'center',
              alignItems : 'flex-start'
          }}>
    <View style={styles.eachDetail}>
      <Text style={styles.title}>Name : </Text>
      <Text style={styles.subTitle}>{params.fname} {params.lname}</Text>
      </View>
      <View style={styles.eachDetail}>
      <Text style={styles.title}>Email : </Text>
      <Text style={styles.subTitle}>{params.email}</Text>
      </View>
      <View style={styles.eachDetail}>
      <Text style={styles.title}>Password : </Text>
      <Text style={styles.subTitle}>{params.password}</Text>
    </View>
    </View>
    </View>
  )
}

export default Details

const styles = StyleSheet.create({
    eachDetail : {
        flexDirection : 'row',
        padding : '1%'
    },
    title : {
        fontSize : 22,
        fontWeight : '700'
    },
    subTitle : {
        fontSize : 20,
        fontWeight : '300'
    }
})