import { StyleSheet, Text, View,TouchableOpacity,ImageBackground } from 'react-native'
import React from 'react'

const ListButton = ({listButtonPress,title}) => {
  return (
    <View style={styles.container} >
      <TouchableOpacity onPress={listButtonPress} >
        <ImageBackground source={require('../../../Assets/CustomScreen/listButtonBackground.png')} resizeMode="contain" style={styles.buttonView}>
        <Text style={styles.titleView}>{title}</Text>
        </ImageBackground>
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
        width: 320,
        marginHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 38, 
    },
    container: {
        padding: 3
    }
})