import { View, Text, Modal, StyleSheet, Button,ImageBackground } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'

const DropDownList = ({ modalShown, RightComponent }) => {

  return (
    <View>
      <Modal
        animationType='slide'
        transparent={true}
        visible={modalShown}>

        <View style={Style.centeredView}>
          <ImageBackground>
          <LinearGradient start={{ x: 1.5, y: 0.5 }} end={{ x: 0.0, y: 0.2 }} colors={['#FFFFFF', '#00F0FF', '#6100FF']} style={Style.modalView}>
            <View >{RightComponent}</View>
          </LinearGradient>
          </ImageBackground>
        </View>

      </Modal>
    </View>


  )
}

export default DropDownList;

const Style = StyleSheet.create({
  centeredView: {
    flex: 1,
    alignItems: "center",
    marginTop: 1,
  },
  modalView: {
    margin: 10,
    borderRadius: 20,
    padding: 2,
    alignItems: "center",
    justifyContent: 'center'
  },
})