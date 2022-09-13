import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

const ListButton = ({listButtonPress,title}) => {
  return (
    <View style={styles.container} >
      <TouchableOpacity onPress={listButtonPress} style={styles.buttonView}>
        <View >
        <Text style={styles.titleView}>{title}</Text>
        </View>
      </TouchableOpacity> 
    </View>
  )
}

export default ListButton

const styles = StyleSheet.create({
    titleView: {
        color: '#fff',
        fontSize: 15,
        fontWeight: '600',
    },
    buttonView: {
        height: 60,
        width: 330,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 38,
        opacity: 0.6 
    },
    container: {
        padding: 5
    }
})